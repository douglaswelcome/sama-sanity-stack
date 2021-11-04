export default {
    type: 'object',
    name: 'bodystatic_panelAvatarTxt',
    title: 'Panel Avatar Text',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type:'richText_field',
            name: 'text',
            title: 'Content'
        },
        {
            type: 'string',
            name: 'header',
            title: 'Header'
        },
        {
            type: 'string',
            name: 'subheader',
            title: 'Subheader'
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
            ]
        },
    ],
    preview: {
        select: {
            media: 'image',
            title: 'header'
        },
        prepare ({title, media}) {
          return {
            title,
            media
          }
        }
    }
}