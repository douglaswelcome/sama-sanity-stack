export default {
    type: 'object',
    name: 'lottie',
    title: 'Lottie SVG Animation',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            type: 'string',
            name: 'id',
            title: 'Container ID'
        },
        {
            type: 'boolean',
            name: 'loop',
            title: 'Loop Animation'
        },
        {
            type: 'boolean',
            name: 'autoplay',
            title: 'Autoplay Animation'
        },
        {
            title: 'JSON File',
            name: 'json',
            type: 'file',
            options: {
                accept: 'application/json'
            }
        },
    ]
}
