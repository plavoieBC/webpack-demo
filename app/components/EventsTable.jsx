import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import EventsDataMockStore from '../stores/EventsDataMockStore.js';

const TextCell = ({rowIndex, data, col, ...props}) => (
    <Cell {...props}>
        {data.getObjectAt(rowIndex)[col]}
    </Cell>
);

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
                height={500}
                {...this.props}>
                <Column 
                    header={<Cell>Name</Cell>}
                    cell={<TextCell data={dataList} col="name" />}
                    width={140}
                />
            </Table>
        );
    }
}

export default EventsTable;