var controlsToggle = $('.controls-toggle');
var controlsBody = $('.controls-body');
var usernameInput = $('#username');
var visStatus = $('.vis-status');

var getQueryStringField = function (field) {
    var href = window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};

var readQueryString = function () {
    return {
        username: getQueryStringField('username'),
        listType: getQueryStringField('list_type'),
        displayType: getQueryStringField('display_type'),
        cap: parseInt(getQueryStringField('cap'))
    };
};

var displayError = function (error) {
    console.error(error);
    if (visStatus) {
        visStatus.show();
        visStatus.text('Error: ' + error.toString());
    }
};

var fetchMalData = function (username, listType, callback) {
    superagent('https://kuristina.herokuapp.com/' + listType + '/' + username + '.json')
        .set('Accept', 'application/json')
        .end(callback);
};

var drawVisTimeline = function (data, displayType) {
    var container = document.getElementById('visualization');
    var items = new vis.DataSet(data);
    var options = {
        height: '100%',
        align: 'left',
        zoomMax: 31536000000 * 20,
        zoomMin: 86400000 * 10,
        type: displayType,
    };
    visStatus.hide();
    var timeline = new vis.Timeline(container, items, options);
    visStatus.remove();
    visStatus = null;
};

var padNumber = function (x) {
    return (x < 10) ? ('0' + x) : x.toString();
};

var formatDate = function (date) {
    return date.getFullYear() + '-' + this.padNumber(date.getMonth() + 1) + '-' + padNumber(date.getDate());
};

/**
 * @param {IMALAnime[]} listItems
 * @param {string} displayType
 */
var displayTimeline = function (listItems, displayType) {
    var data = [];
    var animeCount = listItems.length;
    for (var i = 0; i < animeCount; i++) {
        var anime = listItems[i];
        if (+anime.my_status !== 2) continue;
        var animeData = {
            id: i,
            content: anime.series_title,
            start: undefined,
            end: undefined
        };
        var start, end;
        if ([anime.my_start_date, anime.my_finish_date].indexOf('0000-00-00') !== -1
            || !anime.my_start_date
            || !anime.my_finish_date) {
            var dateVal = '/Date(' + anime.my_last_updated + '000)/';
            start = new Date(parseFloat(dateVal.substr(6)));
            end = moment(start).add(1, 'day').toDate();
            end.setDate(start.getDate() + 1);
        } else {
            start = new Date(anime.my_start_date);
            end = new Date(anime.my_finish_date);
            if (end < start) {
                var temp = end;
                end = start;
                start = temp;
            }
            if (start.toUTCString() === end.toUTCString()) {
                if (isNaN(start.getTime())) start = new Date();
                end = moment(start).add(1, 'day').toDate();
            }
        }
        animeData.start = formatDate(start);
        animeData.end = formatDate(end);
        data.push(animeData);
    }
    drawVisTimeline(data, displayType);
};

$(document).ready(function () {
    usernameInput.focus();
    controlsToggle.click(function (event) {
        event.preventDefault();
        controlsBody.toggle();
    });

    var config = readQueryString();
    if (!config.username) return;
    usernameInput.val(config.username);
    config.listType = config.listType ? config.listType : 'anime';
    config.displayType = config.displayType ? config.displayType : 'end';
    try {
        $('#radio-' + config.listType).prop('checked', true);
        $('#radio-' + config.displayType).prop('checked', true);
        $('#checkbox-cap').prop('checked', !!config.cap);
    } catch (error) {
        return displayError(error);
    }

    visStatus.text('Loading data...');
    fetchMalData(config.username, config.listType, function (error, response) {
        if (error) return displayError(error);
        try {
            var listItems;
            if (config.listType === 'manga') {
                listItems = response.body.myanimelist.manga;
            } else {
                listItems = response.body.myanimelist.anime;
            }
            if (!!config.cap) {
                listItems = listItems.slice(0, config.cap);
            }
            displayTimeline(listItems, config.displayType);
        } catch (error) {
            displayError(error);
        }
    });
});