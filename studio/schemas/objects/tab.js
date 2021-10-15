export default {
    type: 'object',
    name: 'tab',
    title: 'Tab',
    fieldsets: [
        {
            title: 'Tab Media',
            name: 'media',
            options: {
              collapsible: true,
              collapsed: false,
              columns: 2
            }
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Tab Title',
            validation: Rule => [
                Rule.required().error('We need a title for all tabs before publishing'),
                Rule.max(40).warning('Shorter titles for tabs are usually better')
              ]
        },
        {
            type: 'richText_field',
            name: 'body',
            title: 'Tab Body Copy'
        },
        {
            type: 'image',
            name: 'image',
            title: 'Image',
            fieldset: 'media',
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
            type: "file",
            name: "video",
            title: "Video",
            fieldset: 'media',
            options: {
                accept: "video/*"
            }
        },
    ]
}