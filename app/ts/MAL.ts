/**
 * @file File responsible for all interactions with MyAnimeList website.
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license MIT
 * @version 0.0.2
 */

/**
 * Interfaces representing the object returned by Kuristina
 * @since 0.0.2
 */
interface IMALUserInfo {
    user_id: string;
    user_name: string;
    user_watching: string;
    user_completed: string;
    user_onhold: string;
    user_dropped: string;
    user_plantowatch: string;
    user_days_spent_watching: string;
}
interface IMALAnime {
    series_animedb_id: string;
    series_title: string;
    series_synonyms: string;
    series_type: string;
    series_episodes: string;
    series_status: string;
    series_start: string;
    series_end: string;
    series_image: string;
    my_id: string;
    my_watched_episodes: string;
    my_start_date: string;
    my_finish_date: string;
    my_score: string;
    my_status: string;
    my_rewatching: string;
    my_rewatching_ep: string;
    my_last_updated: string;
    my_tags: string;
}
interface IMALList {
    myinfo: IMALUserInfo;
    anime: IMALAnime[];
}
interface IKuristinaList {
    myanimelist: IMALList;
}

/**
 * @class A class.
 * @since 0.0.1
 */
class MAL {
    /**
     * Fetches the JSON object containing all list data from the `data-items` attribute on the `table.list-table` HTML
     * element on the list page of the specified user.
     * @since 0.0.1
     */
    public static getListData(username: string,
                              successHandler: (listData: IKuristinaList) => void,
                              errorHandler: (status: number) => void) {
        let url = `https://kuristina.herokuapp.com/anime/${username}.json`;
        Util.fetchJSON(url, successHandler, errorHandler);
    }
}

