# @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
# @copyright 2020
# @license MIT
import re
import os
import json
import boto3
import logging
import dateutil.parser
from datetime import datetime
from botocore.vendored import requests


MAL_CLIENT_ID = '6114d00ca681b7701d1e15fe11a4987e'
MAL_API_BASE_URL = 'https://api.myanimelist.net/v2'

USERNAME_ILLEGAL_CHARACTER_REGEX = re.compile("[^A-Za-z0-9\-\_]+")

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s [%(levelname)s] %(message)s', datefmt='%Y-%m-%d %H:%M:%S')


def lambda_handler(event, context):
    username = event.get('username')
    list_type = event.get('list_type')

    logging.info(f'Got request: {event}')

    try:
        list_entries = get_list_entries(username, list_type)

        return {
            'statusCode': 200,
            'body': json.dumps({'list_entries': list_entries})
        }

    except ValueError as e:
        logging.exception(f'Bad Request: {e}')
        return {
            'statusCode': 400,
            'body': f'Bad Request: {e}'
        }
    except RuntimeError as e:
        logging.exception(f'Server Error: {e}')
        return {
            'statusCode': 500,
            'body': f'Server Error: {e}'
        }
    except Exception as e:
        logging.exception(f'Unknown Error: {e}')
        return {
            'statusCode': 500,
            'body': f'Unknown Error: {e}'
        }



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
    request_url = f'{MAL_API_BASE_URL}/users/{username}/animelist?fields={fields}&limit={limit}'
    logging.debug(f'List request URL: {request_url}')
    response = requests.get(request_url, headers=headers)
    if response.status_code == 200:
        logging.debug(f'Got 200 response from MAL API: {response.text}')
    elif response.status_code == 404:
        logging.warning(f'User {username} was not found!')
        raise ValueError(f'User {username} was not found!')
    else:
        logging.error(f'MAL API returned status code {response.status_code} when trying to get list, with text: {response.text}')
        raise RuntimeError(f'MAL API returned code {response.status_code}.')


    data = json.loads(response.text)
    return data['data']


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

