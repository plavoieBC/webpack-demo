import React from 'react';
import {render} from 'react-dom';

import EventsTable from './components/EventsTable';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Webpack Test Demo</h1>
                <hr/>
                <EventsTable />
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));