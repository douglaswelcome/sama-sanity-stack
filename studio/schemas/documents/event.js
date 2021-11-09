export default {
    name: 'event',
    type: 'document',
    title: 'Events',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type',
            options: {
                list: [
                    { title: 'Conference', value: 'Conference'},
                    { title: 'Hosted By Sama', value: 'Hosted By Sama' },
                    { title: 'Webinar', value: 'Webinar'}
                ],
            },
        },
        {
            name: 'datetime',
            type: 'datetime',
            title: 'Date & Time',
            options: {
              dateFormat: 'MMMM DD, YYYY @ ',
              timeFormat: 'h:mm A',
            }
        },
        {
            name: 'time_zone',
            type: 'string',
            title: 'Timezone',
            options: {
                list: [
                    { title: 'GMT', value: 'GMT'},
                    { title: 'CST', value: 'CST' },
                    { title: 'EST', value: 'EST' },
                    { title: 'MST', value: 'MST' },
                    { title: 'PST', value: 'PST'}
                ],
            },
        },
        {
            type: 'url',
            name: 'url',
            title: 'URL'
        },
        {
            type: 'boolean',
            name: 'featured',
            title: 'Featured?'
        }
    ],
    preview: {
        select: {
          title: 'name',
        }
    }
}