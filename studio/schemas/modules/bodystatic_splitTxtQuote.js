export default {
    type: 'object',
    name: 'bodystatic_splitTxtQuote',
    title: 'Split Text & Quote',
    options: {
      collapsible: true,
      collapsed: false
    }, 
    initialValue: {
        img_position: '',
        theme_color: ''
    },
    fieldsets: [
        {
          title: 'Options',
          name: 'layout_options',
          options: {
            collapsible: true,
            collapsed: false
          }
        },
        {
            title: 'Text Column',
            name: 'txt_column',
            options: {
              collapsible: true,
              collapsed: false
            }
        },
        {
            title: 'Quote Column',
            name: 'quote',
            options: {
                collapsible: true,
                collapsed: false,
                columns: 2
            }
        }
    ],
    fields:[
        {
            name: "img_position",
            title: "Quote Left or Right Column?",
            type: 'string',
            fieldset: 'layout_options',
            options: {
                list: [
                    { title: 'Quote Right Column (Default)', value: 'right'},
                    { title: 'Quote Left Column', value: 'left' }
                ],
            },
        },
        {
            type: 'boolean',
            name: 'fullwidth_image',
            title: 'Make Image Full Width',
            fieldset: 'layout_options'
        },
        {
            name: "theme_color",
            title: "Theme Color",
            type: 'string',
            fieldset: 'layout_options',
            options: {
                list: [
                    { title: 'Sunshine Yellow (Default)', value: ''},
                    { title: 'Magenta Purple', value: 'purple' },
                    { title: 'Green Blue', value: 'green'},
                    { title: 'Red Orange', value: 'red_orange'},
                    { title: 'Dark Blue Light Blue', value: 'blue'},
                    { title: 'Red Pink', value: 'pink_red'},
                    { title: "Blue Purple", value: 'blue_purple'}
                ],
            },
        },
        {
            name: 'heading',
            type: 'string',
            title: 'Heading',
            fieldset: 'txt_column'
        },
        {
            name: 'preheading',
            type: 'string',
            title: 'Preheading',
            fieldset: 'txt_column'
        },
        {
            type: 'richText_field',
            name: 'body',
            title: 'Body Copy',
            fieldset: 'txt_column'
        },
        {
            type: 'button',
            name: 'cta',
            title: 'CTA',
            fieldset: 'txt_column'
        },
        {
            type: 'quote',
            name: 'quote',
            title: 'Quote',
            fieldset: 'quote'
        }
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'quote.author_headshot'
        },
        prepare ({title, media}) {
          return {
            title: title,
            media: media
          }
        }
    }
}