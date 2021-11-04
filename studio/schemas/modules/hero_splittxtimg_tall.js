export default {
    type: 'object',
    name: 'hero_splittxtimg_tall',
    title: 'Hero Tall Split Text & Image',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
        {
            name: 'preheadline',
            type: 'string',
            title: 'Preheadline',
        },
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'tagline',
            type: 'string',
            title: 'Tagline'
        },
        {
            name: 'ctas',
            type: 'array',
            title: 'CTAs',
            of: [
                {type: 'button'},
            ]
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
            options: {
                hotspot: true
            }
        },
        ],
        preview: {
          select: {
            title: 'heading',
            media: 'image'
          },
          prepare ({title, media}) {
            return {
              title: title,
              media
            }
          }
        }
    }