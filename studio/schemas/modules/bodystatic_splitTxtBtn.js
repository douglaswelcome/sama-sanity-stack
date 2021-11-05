export default {
    type: 'object',
    name: 'bodystatic_splitTxtBtn',
    title: 'Split Text & Buttons',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type: 'string',
            name: 'headline',
            title: 'Headline'
        },
        {
            type: 'text',
            name: 'body',
            title: 'Body Text'
        },
        {
            type: 'array',
            name: 'buttons',
            title: 'Buttons',
            validation: Rule => [
                Rule.max(2)
            ],
            of:[
              {type: 'button'}
            ]
        }
    ],
    preview: {
        prepare () {
          return {
            title: 'Split Text and Buttons'
          }
        }
    }
}