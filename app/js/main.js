///<reference path="MAL.ts"/>
/**
 * @file A TypeScript file.
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license MIT
 * @version 0.0.1
 */
MAL.getListData(window.location.hash.substr(1), function (listData) {
    console.log(listData);
    var data = [];
    var animeCount = listData.myanimelist.anime.length;
    for (var i = 0; i < animeCount; i++) {
        var anime = listData.myanimelist.anime[i];
        var animeData = {
            id: i,
            content: anime.series_title,
            start: undefined,
            end: undefined,
        };
        if (+anime.my_status !== 2) {
            continue;
        }
        if ([anime.my_start_date, anime.my_finish_date].indexOf('0000-00-00') !== -1) {
            var dateVal = "/Date(" + anime.my_last_updated + "000)/";
            var update = new Date(parseFloat(dateVal.substr(6)));
            animeData.start = Util.formatDate(update);
        }
        else {
            var start = new Date(anime.my_start_date);
            var end = new Date(anime.my_finish_date);
            if (end < start) {
                var temp = end;
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
    var container = document.getElementById('visualization');
    // Create a DataSet (allows two way data-binding)
    var items = new vis.DataSet(data);
    // Configuration for the Timeline
    var options = {
        height: '100%',
        align: 'left',
        zoomMax: 31536000000 * 20,
        zoomMin: 86400000 * 10,
        type: 'point',
    };
    // Create a Timeline
    var timeline = new vis.Timeline(container, items, options);
}, function (status) {
    alert('ERROR!');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCOzs7Ozs7R0FNRztBQUVILEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQUMsUUFBUTtJQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztJQUNyQixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbkQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLFNBQVMsR0FBRztZQUNaLEVBQUUsRUFBRSxDQUFDO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQzNCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEdBQUcsRUFBRSxTQUFTO1NBQ2pCLENBQUM7UUFDRixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixRQUFRLENBQUM7UUFDYixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLElBQUksT0FBTyxHQUFHLFdBQVMsS0FBSyxDQUFDLGVBQWUsVUFBTyxDQUFDO1lBQ3BELElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFDLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ2YsR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9DLENBQUM7WUFDRCxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUV6RCxpREFBaUQ7SUFDakQsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxDLGlDQUFpQztJQUNqQyxJQUFJLE9BQU8sR0FBRztRQUNWLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsV0FBVyxHQUFHLEVBQUU7UUFDekIsT0FBTyxFQUFFLFFBQVEsR0FBRyxFQUFFO1FBQ3RCLElBQUksRUFBRSxPQUFPO0tBQ2hCLENBQUM7SUFFRixvQkFBb0I7SUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0QsQ0FBQyxFQUFFLFVBQUMsTUFBTTtJQUNOLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii90cyJ9
