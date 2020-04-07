# @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
# @copyright 2020
# @license MIT
import re
import os
import json
import boto3
import logging
import dateutil.parser
from typing import Union
from datetime import datetime
from botocore.vendored import requests


MAL_CLIENT_ID = '6114d00ca681b7701d1e15fe11a4987e'
MAL_API_BASE_URL = 'https://api.myanimelist.net/v2'

USERNAME_ILLEGAL_CHARACTER_REGEX = re.compile("[^A-Za-z0-9\-\_]+")

logging.getLogger().setLevel(logging.DEBUG)
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s [%(levelname)s] %(message)s', datefmt='%Y-%m-%d %H:%M:%S')


def prepare_response(status_code: int, payload: Union[dict, str]) -> dict:
    body = payload if not isinstance(payload, dict) else {'message': payload}

    return {
        'statusCode': status_code,
        'headers': {
            'Access-Control-Allow-Origin': '*',
        },
        'body': body,
    }


def lambda_handler(event, context):
    data_source = event.get('queryStringParameters', event)
    username = data_source.get('username')
    list_type = data_source.get('list_type')

    logging.info(f'Got request: {event}')

    try:
        list_entries = get_list_entries(username, list_type)
        return prepare_response(200, json.dumps({'list_entries': list_entries}))

    except ValueError as e:
        error_message = f'Bad Error: {e}'
        logging.exception(error_message)
        return prepare_response(400, error_message)

    except RuntimeError as e:
        error_message = f'Server Error: {e}'
        logging.exception(error_message)
        return prepare_response(500, error_message)

    except Exception as e:
        error_message = f'Unknown Error:: {e}'
        logging.exception(error_message)
        return prepare_response(500, error_message)


def get_list_entries(username: str, list_type: str) -> list:
    if not username or not list_type:
        raise ValueError('Required fields are missing from the request: "username" or "list_type".')

    username = USERNAME_ILLEGAL_CHARACTER_REGEX.sub('', username)
    list_type = list_type.lower()

    logging.debug(f'Sanitised username and list type: "{username}", "{list_type}"')

    if list_type not in ['anime', 'manga']:
        raise ValueError(f'List type can only be "anime" or "manga". Got "{list_type}".')

    access_token = generate_access_token()
    list_entries = fetch_mal_api_entries(access_token, username, list_type)
    return list_entries


def fetch_mal_api_entries(access_token: str, username: str, list_type: str) -> list:
    logging.info(f'Fetching {list_type} list for {username}...')
    headers = {
        'X-MAL-Client-ID': MAL_CLIENT_ID,
        'Authorization': f'Bearer {access_token}'
    }
    fields = 'list_status{start_date,finish_date}'
    limit = 1000
    initial_request_url = f'{MAL_API_BASE_URL}/users/{username}/animelist?fields={fields}&limit={limit}'

    list_entries = []

    page_index = -1
    page_url = initial_request_url
    while page_index < 5 and page_url:
        page_index += 1

        logging.debug(f'List request URL for page {page_index + 1}: {page_url}')
        response = requests.get(page_url, headers=headers)
        if response.status_code == 200:
            logging.debug(f'Got 200 response from MAL API: {response.text}')
            data = json.loads(response.text)
            list_entries += data['data']
            page_url = data.get('paging', {}).get('next')

        elif response.status_code == 404:
            logging.warning(f'User {username} was not found!')
            raise ValueError(f'User {username} was not found!')
        else:
            logging.error(f'MAL API returned status code {response.status_code} when trying to get page {page_index + 1} of the list, with text: {response.text}')
            raise RuntimeError(f'MAL API returned code {response.status_code} when trying to get page {page_index + 1} of the list.')

    return list_entries


def generate_access_token():
    dynamodb = boto3.client('dynamodb')
    record_key = {'key': {'S': 'api-credentials-json'}}

    try:
        logging.info('Trying to read cached access token...')
        db_record = dynamodb.get_item(TableName='my-anime-timeline', Key=record_key)
        cached_credentials_json = db_record['Item']['json']['S']
        cached_credentials = json.loads(cached_credentials_json)

        access_token = cached_credentials['access_token']
        expires_in_seconds = int(cached_credentials['expires_in_seconds'])
        retrieval_date = dateutil.parser.parse(cached_credentials['retrieval_date'])

        current_date = datetime.now()
        seconds_passed = (current_date - retrieval_date).total_seconds()
        if seconds_passed > expires_in_seconds * 0.5:
            raise ValueError('Credentials have expired!')

        logging.info('Successfully read cached access token!')

    except Exception as e:
        logging.error(f'Could not retreive cached credentials: {e}')
        logging.info(f'Requesting new access token from MAL API...')
        data = {
            'client_id': MAL_CLIENT_ID,
            'grant_type': 'password',
            'username': os.environ['mal_username'],
            'password': os.environ['mal_password'],
        }
        response = requests.post(f'{MAL_API_BASE_URL}/auth/token', data=data)
        if response.status_code != 200:
            logging.error(f'MAL API returned status code {response.status_code} when trying to get access token, with text: {response.text}')
            raise RuntimeError(f'MAL API returned code {response.status_code}.')

        logging.debug(f'Received response from MAL API: {response.text}')
        credentials = json.loads(response.text)
        assert credentials['token_type'] == 'Bearer'
        access_token = credentials['access_token']
        expires_in_seconds = int(credentials['expires_in'])
        retrieval_date = datetime.now()

        logging.info('Successfully got token from MAL API!')

        data = {
            'access_token': access_token,
            'expires_in_seconds': expires_in_seconds,
            'retrieval_date': retrieval_date.isoformat(),
        }
        dynamodb.update_item(TableName='my-anime-timeline', Key=record_key, AttributeUpdates={'json': {'S': json.dumps(data)}})

        logging.info('Successfully cached access token.')

    return access_token
