/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import moment from 'moment';

import {formatDate} from './Utils';
import {EntryStatus, ListEntry} from './MalApi';

export enum DisplayType {
    Point = 'point',
    Box = 'box',
    Range = 'range',
}

export const SupportedDisplayTypes = [DisplayType.Point, DisplayType.Box, DisplayType.Range];

type VisJsRecord = { id: number; content: string; start: string; end: string }
type VisJsDataset = VisJsRecord[]

export const prepareVisJsDataset = (listEntries: ListEntry[]): VisJsDataset => {
    const dataset: VisJsDataset = [];
    for (let i = 0; i < listEntries.length; i++) {
        const entry = listEntries[i];
        const entryDetails = entry.node;
        const entryStatus = entry.list_status;

        if (entry.list_status.status !== EntryStatus.Completed) continue;

        let start: Date | null = null;
        let end: Date | null = null;
        if (entryStatus.start_date && entryStatus.finish_date
            && !entryStatus.start_date.startsWith('0000-00-00')
            && !entryStatus.finish_date?.startsWith('0000-00-00')) {
            start = new Date(entryStatus.start_date);
            end = new Date(entryStatus.finish_date);
            if (end < start) [start, end] = [end, start];
            if (start.toUTCString() === end.toUTCString()) {
                if (isNaN(start.getTime())) start = new Date(entryStatus.updated_at);
                end = moment(start).add(1, 'day').toDate();
            }
        } else {
            start = new Date(entryStatus.updated_at);
            end = moment(start).add(1, 'day').toDate();
            end.setDate(start.getDate() + 1);
        }

        const record = {
            id: i,
            content: entryDetails.title,
            start: formatDate(start),
            end: formatDate(end),
        };
        dataset.push(record);
    }
    return dataset.sort((a, b) => b.end.localeCompare(a.end));
};

export const drawVisJsTimeline = (dataset: VisJsDataset, displayType: DisplayType) => {
    const container = document.getElementById('visualization');
    const items = new vis.DataSet(dataset);
    const options = {
        height: '100%',
        align: 'left',
        zoomMax: 31536000000 * 20,
        zoomMin: 86400000 * 10,
        type: displayType,
    };
    new vis.Timeline(container, items, options);
};
