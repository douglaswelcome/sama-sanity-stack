export default {
    type: 'object',
    name: 'grid_image',
    title: 'Grid Item Image & Text',
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
            type: 'link',
            name: 'link',
            title: 'Link'
        },
        {
            type: 'image',
            name: 'image',
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