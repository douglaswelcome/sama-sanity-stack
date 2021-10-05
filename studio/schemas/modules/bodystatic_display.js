export default {
    type: 'object',
    name: 'bodystatic_display',
    title: 'Display Large Text',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type: 'text',
            name: 'text',
            title: 'Text'
        },
    ],
    preview: {
        select: {
            title: 'text'
        },
        prepare ({title}) {
          return {
            title: title
          }
        }
    }
}