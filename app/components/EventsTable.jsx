import React, {PropTypes} from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import EventsDataMockStore from '../stores/EventsDataMockStore.js';

class TextCell extends React.Component {
    render() {
        const {rowIndex, data, field, ...props} = this.props;
        return (
            <Cell {...props}>
                {data.getObjectAt(rowIndex)[field]}
            </Cell>
        );
    }
}
                
class LinkCell extends React.Component {
    render() {
        const {rowIndex, data, field, link, ...props} = this.props;

        return (
            <Cell {...props}>
                <a href={data.getObjectAt(rowIndex)[link]}>
                    {data.getObjectAt(rowIndex)[field]}
                </a>
            </Cell>
        );
    }
}

class DateCell extends React.Component {
    render() {
        const {rowIndex, data, field, ...props} = this.props;
        
        return (
            <Cell {...props}>
                {new Date(data.getObjectAt(rowIndex)[field]).toLocaleDateString('en-CA')}
            </Cell>
        );
    }
}

class DirectionCell extends React.Component {
    render() {
        const {rowIndex, data, field1, field2, ...props} = this.props;
        const entry = data.getObjectAt(rowIndex)[0];

        return (
            <Cell {...props}>
                {entry[field1]} {entry[field2]}
            </Cell>
        );
    }
}

class EventsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataList: new EventsDataMockStore()
        };
    }

    render() {
        let {dataList} = this.state;

        return(
            <Table
                rowHeight={50}
                headerHeight={50}
                rowsCount={dataList.getSize()}
                width={1300}
                height={300}
                {...this.props}>
                <Column 
                    header={<Cell>ID</Cell>}
                    cell={<LinkCell data={dataList} field="name" link="url"/>}
                    width={140}
                />
                <Column 
                    header={<Cell>Event</Cell>}
                    cell={<TextCell data={dataList} field="headline" />}
                    width={150}
                />
                <Column 
                    header={<Cell>Description</Cell>}
                    cell={<TextCell data={dataList} field="description"/>}
                    width={400}
                />
                <Column 
                    header={<Cell>Created</Cell>}
                    cell={<DateCell data={dataList} field="created"/>}
                    width={120}
                />
                <Column 
                    header={<Cell>Renewed</Cell>}
                    cell={<DateCell data={dataList} field="updated"/>}
                    width={120}
                />
            </Table>
        );
    }
}

export default EventsTable;