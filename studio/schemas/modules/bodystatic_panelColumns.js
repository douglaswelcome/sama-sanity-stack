export default {
    type: 'object',
    name: 'bodystatic_panelColumns',
    title: 'Two Column Panels',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
        {
            name: 'panels',
            type: 'array',
            title: 'Panels',
            validation: Rule => [
                Rule.min(1),
                Rule.max(2)
            ],
            of:[
              {
                  type:'object',
                  name: 'panel',
                  title: 'Panel',
                  fields: [
                      {
                          name: 'header',
                          type: 'string',
                          title: 'Header'
                      },
                      {
                          name: 'body',
                          type: 'richText_field',
                          title: 'Body'
                      },
                      {
                          name: 'image',
                          type: 'image',
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
            ]
        }
    ],
    preview: {
        select: {
            panels: 'panels.0.header',
            image: 'panels.0.image.asset.url'
        },
        prepare ({panels,image}) {
            return {
                title: `Two Column Panels: ${panels}...`,
            }
        }
    }
}