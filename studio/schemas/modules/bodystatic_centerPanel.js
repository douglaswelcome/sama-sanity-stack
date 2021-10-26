export default {
    type: 'object',
    name: 'bodystatic_centerPanel',
    title: 'Center Panel',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type: 'string',
            name: 'heading',
            title: 'Heading'
        },
        {
            type: 'richText_field',
            name: 'body_copy',
            title: 'Body Copy'
        },
    ],
    preview: {
        select: {
            title: 'heading'
        },
        prepare ({title}) {
          return {
            title: title
          }
        }
    }
}