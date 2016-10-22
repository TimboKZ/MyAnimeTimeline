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
var MAL_ADDRESS = 'http://myanimelist.net/';
/**
 * @class A class.
 * @since 0.0.1
 */
var MAL = (function () {
    function MAL() {
    }
    /**
     * Fetches the JSON object containing all list data from the `data-items` attribute on the `table.list-table` HTML
     * element on the list page of the specified user.
     * @since 0.0.1
     */
    MAL.getListData = function (username) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', MAL_ADDRESS + 'malappinfo.php?u=' + username + '&status=all&type=anime', false);
        xhr.send();
        var content = xhr.responseBody;
        return content;
    };
    return MAL;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1BTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7O0dBR0c7QUFDSCxJQUFNLFdBQVcsR0FBVyx5QkFBeUIsQ0FBQztBQUV0RDs7O0dBR0c7QUFDSDtJQUFBO0lBYUEsQ0FBQztJQVpHOzs7O09BSUc7SUFDVyxlQUFXLEdBQXpCLFVBQTBCLFFBQWdCO1FBQ3RDLElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxHQUFHLG1CQUFtQixHQUFHLFFBQVEsR0FBRyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQSIsImZpbGUiOiJNQUwuanMiLCJzb3VyY2VSb290IjoiL3RzIn0=
