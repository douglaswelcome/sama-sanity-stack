export default {
    type: 'object',
    name: 'icon_copy',
    title: 'Icon Copy',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Title'
        },
        {
            type: 'text',
            name: 'body',
            title: 'Body Copy'
        },
        {
            type: 'image',
            name: 'icon',
            title: 'Image',
            fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  options: {
                    isHighlighted: true
                  }
                }
            ],
        }
    ]
}