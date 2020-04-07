/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import request from 'superagent';
import Promise from 'bluebird';

export enum ListType {
    Anime = 'anime',
    Manga = 'manga',
}

export const SupportedListTypes = [ListType.Anime, ListType.Manga];

export enum EntryStatus {
    Completed = 'completed',
    PlanToWatch = 'plan_to_watch',
    Watching = 'watching',
}

export interface ListEntry {
    node: {
        id: number;
        title: string;
        main_picture: {
            medium: string;
            large: string;
        };
    };
    list_status: {
        status: string;
        score: number;
        num_episodes_watched: number;
        is_rewatching: boolean;
        updated_at: string;
        start_date?: string;
        finish_date?: string;
    };
}

export const getMalListEntries = (username: string, listType: ListType): Promise<ListEntry[]> => {
    const lambdaBaseUrl = 'https://wkup5ts6yk.execute-api.eu-west-2.amazonaws.com';
    const uri = encodeURI(`/v1?username=${username}&list_type=${listType}`);
    const requestUrl = `${lambdaBaseUrl}${uri}`;
    return Promise.resolve()
        .then(() => request.get(requestUrl).accept('application/json'))
        .then(response => {
            if (response.status !== 200) {

            }
            return response.body.list_entries as ListEntry[];
        });
};
