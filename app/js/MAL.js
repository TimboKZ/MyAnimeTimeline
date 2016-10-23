/**
 * @file File responsible for all interactions with MyAnimeList website.
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license MIT
 * @version 0.0.2
 */
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
    MAL.getListData = function (username, successHandler, errorHandler) {
        var url = "https://kuristina.herokuapp.com/anime/" + username + ".json";
        Util.fetchJSON(url, successHandler, errorHandler);
    };
    return MAL;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1BTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUE2Q0g7OztHQUdHO0FBQ0g7SUFBQTtJQVlBLENBQUM7SUFYRzs7OztPQUlHO0lBQ1csZUFBVyxHQUF6QixVQUEwQixRQUFnQixFQUNoQixjQUFrRCxFQUNsRCxZQUFzQztRQUM1RCxJQUFJLEdBQUcsR0FBRywyQ0FBeUMsUUFBUSxVQUFPLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUEiLCJmaWxlIjoiTUFMLmpzIiwic291cmNlUm9vdCI6Ii90cyJ9
