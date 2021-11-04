export default {
    type: 'object',
    name: 'bodymove_splitTxtImg_slide',
    title: 'Two Column Slide',
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
        },
        {
            title: 'Column 1',
            name: 'column1',
            options: {
              collapsible: true,
              collapsed: false
            }
        },
        {
            title: 'Column 2 Text',
            name: 'column2',
            options: {
                collapsible: true,
                collapsed: false,
            }
        },
        {
            title: 'Column 2 Media',
            name: 'media',
            options: {
                collapsible: true,
                collapsed: true,
                columns: 2
            }
        }
    ],
    fields:[
        {
            type: 'boolean',
            name: 'img_frame',
            fieldset: 'layout_options',
            title: 'Add Frame Around Image'
        },
        {
            name: 'preheading',
            type: 'string',
            title: 'Preheading',
            fieldset: 'column1'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            fieldset: 'column1'
        },
        {
            type: 'text',
            name: 'body',
            title: 'Body Copy',
            fieldset: 'column1'
        },
        {
            type: 'button',
            name: 'cta',
            title: 'CTA',
            fieldset: 'column1'
        },
        {
            type: 'array',
            title: 'Bullet Icon List',
            name: 'bullets',
            fieldset: 'column2',
            of:[
                {type: 'bullet_icon'}
            ]
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
    ]
}