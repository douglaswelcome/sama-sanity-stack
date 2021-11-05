export default {
    type: 'object',
    name: 'hero_splittxtimg',
    title: 'Hero Split Text & Image',
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
            name: 'cta',
            type: 'button',
            title: 'CTA 1'
        },
        {
          name: 'cta2',
          type: 'button',
          title: 'CTA 2',
          options: {
            collapsible: true,
            collapsed: true
          },
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
            ]
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