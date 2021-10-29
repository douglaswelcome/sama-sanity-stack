export default {
    type: 'object',
    name: 'bodystatic_headline',
    title: 'Left Headline Subheadline Button',
    options: {
      collapsible: true,
      collapsed: false
    },
    fieldsets: [
        {
          title: 'Options',
          name: 'layout_options',
          options: {
            collapsible: true,
            collapsed: false
          }
        }
    ],
    fields:[
        {
            type: 'string',
            name: 'preheadline',
            title: 'Preheadline'
        },
        {
            type: 'string',
            name: 'headline',
            title: 'Headline'
        },
        {
            type: 'string',
            name: 'subheadline',
            title: 'Subheadline'
        },
        {
            type: 'button',
            name: 'button',
            title: 'CTA'
        }
    ],
    preview: {
        select: {
            title: 'headline'
        },
        prepare ({title}) {
          return {
            title: title
          }
        }
    }
}