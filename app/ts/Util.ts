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
class Util {
    /**
     * Fetch JSON from specified URL.
     * @since 0.0.1
     */
    public static fetchJSON(url: string,
                            successHandler: (object: any) => void,
                            errorHandler: (status: number) => void) {
        let xhr = typeof XMLHttpRequest !== undefined
            ? new XMLHttpRequest()
            : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', url, true);
        xhr.onreadystatechange = () => {
            let status: number;
            let data: any;
            if (xhr.readyState === 4) {
                status = xhr.status;
                if (status === 200) {
                    data = JSON.parse(xhr.responseText);
                    if (successHandler) {
                        successHandler(data);
                    }
                } else {
                    if (errorHandler) {
                        errorHandler(status);
                    }
                }
            }
        };
        xhr.send();
    }

    /**
     * Formats JavaScript date int YYYY-MM-DD format.
     * @since 0.0.1
     */
    public static formatDate(date: Date): string {
        return date.getFullYear() + '-' + this.padNumber(date.getMonth() + 1) + '-' + this.padNumber(date.getDate());
    }

    /**
     * Add a leading zero to a number if it's less than 10
     * @since 0.0.1
     */
    public static padNumber(x: Number): string {
        return (x < 10) ? ('0' + x) : x.toString();
    }
}

