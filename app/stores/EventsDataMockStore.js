import uuid from 'uuid';

class EventsDataMockStore {
    constructor() {
        this.tableData = [
            {
                id: uuid.v4(),
                name: 'RTMC_10813',
                headline: 'INCIDENT',
                severity: 'MAJOR',
                event_type: 'INCIDENT',
                description: 'Collision on Highway 99 Northbound after W Georgia St/Ramp to Stanley Park Dr. 1 right lane blocked.',
                created: '2016-08-18T00:37:20-07:00',
                updated: '2016-08-18T00:38:26-07:00',
                url: 'http://api.open511.gov.bc.ca/events/drivebc.ca/RTMC_10813',
                roads: [
                    {
                        'name': 'Highway 99',
                        'direction': 'N',
                        'state': 'ALL_LANES_OPEN',
                        '+delay': '30+'
                    }
                ]
            },
            {
                id: uuid.v4(),
                name: 'RTMC_9830',
                headline: 'CONSTRUCTION',
                severity: 'MAJOR',
                event_type: 'INCIDENT',
                description: 'Expect delays crossing the Lions Gate Bridge during the two-day (12hour) installation period April 2 and 3 (weather dependent). There will be a single lane closure 9pm-10:30pm April 2, and then single lane alternating traffic from 10:30pm April 2 until 9am April 3. Please consider an alternate route during this period.',
                created: '2016-03-31T23:49:10-07:00',
                updated: '2016-04-03T04:06:48-07:00',
                url: 'http://api.open511.gov.bc.ca/events/drivebc.ca/RTMC_9830',
                roads: [
                    {
                        'name': 'Highway 99',
                        'direction': 'BOTH',
                        'state': 'ALL_LANES_OPEN'
                    }
                ]
            },
        ];
        this.size = this.tableData.length;
    }

    getObjectAt(index) {
        if (index < 0 || index > this.size) {
            return undefined;
        }
        return this.tableData[index];
    }

    getSize() {
        return this.size;
    }
}

export default EventsDataMockStore;

