export default {
    type: 'object',
    name: 'bodystatic_splitTxtImg',
    title: 'Split Text and Image',
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
            title: 'Image Column',
            name: 'img_column',
            options: {
              collapsible: true,
              collapsed: false
            }
        }
    ],
    fields:[
        {
            name: "img_position",
            title: "Image Left or Right Column?",
            type: 'string',
            fieldset: 'layout_options',
            options: {
                list: [
                    { title: 'Image Right Column (Default)', value: 'right'},
                    { title: 'Image Left Column', value: 'left' }
                ],
            },
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
            type: 'boolean',
            name: 'img_frame',
            fieldset: 'layout_options',
            title: 'Add Frame Around Image'
        },
        {
            name: 'heading',
            type: 'string',
            title: 'Heading',
            fieldset: 'txt_column'
        },
        {
            name: 'subheading',
            type: 'string',
            title: 'Subheading',
            fieldset: 'txt_column'
        },
        {
            type: 'text',
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
            type: 'image',
            name: 'image',
            title: 'Image',
            fieldset: 'img_column',
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
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'image'
        },
        prepare ({title, media}) {
          return {
            title: title,
            media: media
          }
        }
    }
}