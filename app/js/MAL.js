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
var MAL_ADDRESS = 'https://myanimelist.net/';
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
        var request = new XMLHttpRequest();
        request.open('GET', MAL_ADDRESS + 'animelist/' + username, false);
        request.send();
        var content = request.responseBody;
        return content;
    };
    return MAL;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1BTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7O0dBR0c7QUFDSCxJQUFNLFdBQVcsR0FBVywwQkFBMEIsQ0FBQztBQUV2RDs7O0dBR0c7QUFDSDtJQUFBO0lBYUEsQ0FBQztJQVpHOzs7O09BSUc7SUFDVyxlQUFXLEdBQXpCLFVBQTBCLFFBQWdCO1FBQ3RDLElBQUksT0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxHQUFHLFlBQVksR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUEiLCJmaWxlIjoiTUFMLmpzIiwic291cmNlUm9vdCI6Ii90cyJ9
