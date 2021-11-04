export default {
    type: 'object',
    name: 'embed',
    title: 'Video Embed',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            name: "type",
            type: "string",
            title: 'Type',
            options: {
                list: [
                    { title: 'Viemo', value: 'vimeo'},
                    { title: 'Youtube', value: 'youtube' }
                ],
            },
        },
        {
            name: 'url',
            type: 'url',
            title: 'Video URL'
        }
    ]
}