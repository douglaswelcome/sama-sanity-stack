export default {
    type: 'object',
    name: 'bodystatic_panelQuote',
    title: 'Panel Quote',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type: 'quote',
            name: 'quote'
        },
    ],
    preview: {
        select: {
            media: 'quote.author_headshot'
        },
        prepare ({media}) {
          return {
            title: 'Panel Quote',
            media
          }
        }
    }
}