export default {
    type: 'object',
    name: 'button',
    title: 'Button',
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "link",
            type: "url",
            title: "Link URL"
        },
        {
            name: "type",
            type: "string",
            title: 'Button Type',
            options: {
                list: [
                  { title: 'Secondary', value: 'secondary' },
                ],
            },
        }
    ]
}