export default {
    type: 'object',
    name: 'bodymove_accordion',
    title: 'Accordion',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
        {
            type: 'array',
            name: 'panels',
            title: 'Panels',
            of:[
                {
                    type: 'object',
                    name: 'feature',
                    title: 'Feature',
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            title: 'Title'
                        },
                        {
                            type: 'richText_field',
                            name: 'body_copy',
                            title: 'Body Copy'
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
                            type: 'array',
                            title: 'Bullet Icon List',
                            name: 'bullets',
                            of:[{type: 'bullet_icon'}]
                        },
                        {
                            type: 'string',
                            name: 'cta',
                            title: 'CTA Text'
                        },
                        {
                            type: 'link',
                            name: 'cta_url',
                            title: 'CTA Link'
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        prepare () {
        return {
          title: 'Accordion',
        }
      }
    }
  }
