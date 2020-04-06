/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
export const getUrlParameter = (name: string): string => {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    // eslint-disable-next-line no-restricted-globals
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const getConfigFromUrlParameters = () => {
    return {
        username: getUrlParameter('username'),
        listType: getUrlParameter('list_type'),
        cap: Number(getUrlParameter('cap')),
        displayType: getUrlParameter('display_type'),
    } as const;
};

const padNumber = (x: number): string => {
    return (x < 10) ? ('0' + x) : x.toString();
};

export const formatDate = (date: Date): string => {
    return date.getFullYear() + '-' + padNumber(date.getMonth() + 1) + '-' + padNumber(date.getDate());
};
