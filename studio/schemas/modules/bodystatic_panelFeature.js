export default {
    type: 'object',
    name: 'bodystatic_panelFeature',
    title: 'Panel Feature',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
        {
            type: 'boolean',
            name: 'image_position',
            title: 'Align Image Right'
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
        },
        {
            type: 'string',
            name: 'headline',
            title: 'Headline'
        },
        {
            type: 'text',
            name: 'body_text',
            title: 'Body Text'
        },
        {
            type: 'button',
            name: 'button',
            title: 'Button'
        },
        {
            type: 'array',
            name: 'awards',
            title: 'Award Logo',
            of:[
                {
                    type: 'image',
                    name:'logo',
                    title: 'Logo',
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
    ],
    preview: {
        select: {
            media: 'image'
        },
        prepare ({media}) {
          return {
            title: 'Panel Feature',
            media
          }
        }
    }
}