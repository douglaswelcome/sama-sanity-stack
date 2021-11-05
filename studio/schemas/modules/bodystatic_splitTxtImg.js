export default {
    type: 'object',
    name: 'bodystatic_splitTxtImg',
    title: 'Split Text & Media',
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
            title: 'Media Column',
            name: 'media',
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
            title: "Media Left or Right Column?",
            type: 'string',
            fieldset: 'layout_options',
            options: {
                list: [
                    { title: 'Media Right Column (Default)', value: 'right'},
                    { title: 'Media Left Column', value: 'left' }
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
            type: "video",
            name: "video",
            title: "Video",
            fieldset: 'media'
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
            media: media
          }
        }
    }
}