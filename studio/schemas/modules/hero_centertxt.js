export default {
    type: 'object',
    name: 'hero_centertxt',
    title: 'Hero Center Text',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
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
            title: 'CTA'
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