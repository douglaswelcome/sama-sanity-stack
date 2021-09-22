export default {
    type: 'object',
    name: 'quote',
    title: 'Quote',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type:'text',
            name: 'quote_text',
            title: 'Quote Text'
        },
        {
            type: 'string',
            name: 'quote_author',
            title: 'Quote Author'
        },
        {
            type: 'string',
            name: 'author_title',
            title: 'Author Job Title'
        },
        {
            type: 'image',
            name: 'author_headshot',
            title: 'Quote Image',
            fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  options: {
                    isHighlighted: true
                  }
                }
            ]
        },
    ]
}