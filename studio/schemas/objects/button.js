export default {
    type: 'object',
    name: 'button',
    title: 'Button',
    initialValue: {
        type: ''
    },
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "link",
            type: "link",
            title: "Link URL"
        },
        {
            name: "type",
            type: "string",
            title: 'Button Type',
            options: {
                list: [
                    { title: 'Primary (Default)', value: ''},
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Arrow CTA', value: 'arrow'}
                ],
            },
        }
    ]
}