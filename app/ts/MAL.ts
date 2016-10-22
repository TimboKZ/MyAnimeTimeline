/**
 * @file File responsible for all interactions with MyAnimeList website.
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license MIT
 * @version 0.0.1
 */

/**
 * MAL website address
 * @since 0.0.1
 */
const MAL_ADDRESS: string = 'https://myanimelist.net/';

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
    public static getListData(username: string): string {
        let request = new XMLHttpRequest();
        request.open('GET', MAL_ADDRESS + 'animelist/' + username, false);
        request.send();
        let content = request.responseBody;
        return content;
    }
}

