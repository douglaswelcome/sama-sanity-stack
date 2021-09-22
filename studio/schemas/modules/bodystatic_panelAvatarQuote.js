export default {
    type: 'object',
    name: 'bodystatic_panelAvatarQuote',
    title: 'Panel Avatar Quote',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
          type: 'quote',
          name: 'quote',
        },
        {
            type: 'image',
            name: 'company_logo',
            title: 'Company Logo',
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
        }
    ],
    preview: {
        select: {
            media: 'quote.author_headshot'
        },
        prepare ({media}) {
          return {
            title: 'Panel Avatar Quote',
            media
          }
        }
    }
}