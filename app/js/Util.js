/**
 * @file File containing various utility components
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license MIT
 * @version 0.0.1
 */
/**
 * @class A class.
 * @since 0.0.1
 */
var Util = (function () {
    function Util() {
    }
    /**
     * Fetch JSON from specified URL.
     * @since 0.0.1
     */
    Util.fetchJSON = function (url, successHandler, errorHandler) {
        var xhr = typeof XMLHttpRequest !== undefined
            ? new XMLHttpRequest()
            : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', url, true);
        xhr.onreadystatechange = function () {
            var status;
            var data;
            if (xhr.readyState === 4) {
                status = xhr.status;
                if (status === 200) {
                    data = JSON.parse(xhr.responseText);
                    if (successHandler) {
                        successHandler(data);
                    }
                }
                else {
                    if (errorHandler) {
                        errorHandler(status);
                    }
                }
            }
        };
        xhr.send();
    };
    /**
     * Formats JavaScript date int YYYY-MM-DD format.
     * @since 0.0.1
     */
    Util.formatDate = function (date) {
        return date.getFullYear() + '-' + this.padNumber(date.getMonth() + 1) + '-' + this.padNumber(date.getDate());
    };
    /**
     * Add a leading zero to a number if it's less than 10
     * @since 0.0.1
     */
    Util.padNumber = function (x) {
        return (x < 10) ? ('0' + x) : x.toString();
    };
    return Util;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7OztHQUdHO0FBQ0g7SUFBQTtJQStDQSxDQUFDO0lBOUNHOzs7T0FHRztJQUNXLGNBQVMsR0FBdkIsVUFBd0IsR0FBVyxFQUNYLGNBQXFDLEVBQ3JDLFlBQXNDO1FBQzFELElBQUksR0FBRyxHQUFHLE9BQU8sY0FBYyxLQUFLLFNBQVM7Y0FDdkMsSUFBSSxjQUFjLEVBQUU7Y0FDcEIsSUFBSSxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3JCLElBQUksTUFBYyxDQUFDO1lBQ25CLElBQUksSUFBUyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDcEIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDcEMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDZixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ1csZUFBVSxHQUF4QixVQUF5QixJQUFVO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRDs7O09BR0c7SUFDVyxjQUFTLEdBQXZCLFVBQXdCLENBQVM7UUFDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0wsV0FBQztBQUFELENBL0NBLEFBK0NDLElBQUEiLCJmaWxlIjoiVXRpbC5qcyIsInNvdXJjZVJvb3QiOiIvdHMifQ==
