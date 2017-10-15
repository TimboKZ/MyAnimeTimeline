///<reference path="MAL.ts"/>
///<reference path="Util.ts"/>
/**
 * @file A TypeScript file.
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license MIT
 * @version 0.0.1
 */

MAL.getListData(window.location.hash.substr(1), (listData) => {
    console.log(listData);
    let data: any[] = [];
    let animeCount = listData.myanimelist.anime.length;
    for (let i = 0; i < animeCount; i++) {
        let anime = listData.myanimelist.anime[i];
        let animeData = {
            id: i,
            content: anime.series_title,
            start: undefined,
            end: undefined,
        };
        if (+anime.my_status !== 2) {
            continue;
        }
        if ([anime.my_start_date, anime.my_finish_date].indexOf('0000-00-00') !== -1) {
            let dateVal = `/Date(${anime.my_last_updated}000)/`;
            let update = new Date(parseFloat(dateVal.substr(6)));
            animeData.start = Util.formatDate(update);
        } else {
            let start = new Date(anime.my_start_date);
            let end = new Date(anime.my_finish_date);
            if (end < start) {
                let temp = end;
                end = start;
                start = temp;
            }
            if (start.toUTCString() === end.toUTCString()) {
                end = moment(start).add(1, 'day').toDate();
            }
            animeData.start = Util.formatDate(start);
            animeData.end = Util.formatDate(end);
        }
        data.push(animeData);
    }

    // DOM element where the Timeline will be attached
    let container = document.getElementById('visualization');

    // Create a DataSet (allows two way data-binding)
    let items = new vis.DataSet(data);

    // Configuration for the Timeline
    let options = {
        height: '100%',
        align: 'left',
        zoomMax: 31536000000 * 20,
        zoomMin: 86400000 * 10,
        type: 'point',
    };

    // Create a Timeline
    let timeline = new vis.Timeline(container, items, options);
}, (status) => {
    alert('ERROR!');
});
