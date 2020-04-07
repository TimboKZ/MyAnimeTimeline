/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, {useEffect} from 'react';

import './App.css';
import {Links} from './Misc';
import {Controls} from './Controls';
import {getConfigFromUrlParameters} from '../util/Utils';
import {ListType, SupportedListTypes, getMalListEntries} from '../util/MalApi';
import {DisplayType, drawVisJsTimeline, prepareVisJsDataset, SupportedDisplayTypes} from '../util/Visualisation';


function App() {
    const [controlsVisible, setControlsVisible] = React.useState(true);
    const [visualisationStatus, setVisualisationStatus] = React.useState('Enter your MAL credentials!');

    useEffect(() => {
        let {username, listType, cap, displayType} = getConfigFromUrlParameters();
        if (!username || !listType || !displayType) return;
        if (!SupportedListTypes.includes(listType as ListType)) {
            setVisualisationStatus(`Invalid list type: ${listType}. Try resubmitting.`);
            return;
        }
        if (!SupportedDisplayTypes.includes(displayType as DisplayType)) {
            setVisualisationStatus(`Invalid list type: ${listType}. Try resubmitting.`);
            return;
        }

        setVisualisationStatus(`Loading ${username}'s ${listType} list...`);
        getMalListEntries(username, listType as ListType)
            .then(listEntries => {
                const dataset = prepareVisJsDataset(listEntries);
                const dataset_subset = cap > 0 ? dataset.slice(0, cap) : dataset;
                console.log(`Showing ${dataset_subset.length} out of ${dataset.length} entries.`)

                drawVisJsTimeline(dataset_subset, displayType as DisplayType);
                setVisualisationStatus('');
            })
            .catch(error => setVisualisationStatus(`Error: ${error.message}`));
    }, [setVisualisationStatus]);

    const toggleControls = React.useCallback(() => setControlsVisible(prevState => !prevState), []);
    return (
        <div className="App">
            <div className="controls">
                <button onClick={toggleControls} className="controls-toggle">Controls <span>(toggle)</span></button>
                {controlsVisible &&
                <div className="controls-body">
                    <p>Welcome to <strong>MyAnimeTimeline</strong>! This tool lets you visualise your MAL anime and
                        manga progress throughout the years.</p>
                    <Links links={[
                        ['https://foxypanda.me/my-anime-timeline-and-kuristina/', 'Article'],
                        ['https://github.com/TimboKZ/MyAnimeTimeline', 'GitHub'],
                        ['https://discord.gg/HT4ttdQ', 'Discord'],
                    ]}/>
                    <Controls/>
                </div>
                }
            </div>

            <div id="visualization">
                {visualisationStatus !== '' && <div className="vis-status">{visualisationStatus}</div>}
            </div>
        </div>
    );
}

export default App;
