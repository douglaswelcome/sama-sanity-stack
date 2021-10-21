import React from 'react'

export default {
    type: 'object',
    name: 'bodystatic_iconCopy',
    title: 'Columns: Text & Icons',
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
    fields: [
      {
        name: "center",
        title: "Center Align Content",
        type: 'boolean',
        fieldset: 'layout_options'
      },
      {
        name: "responsive",
        title: "Responsive Sized Images",
        description: "Make icon image dimensions responsive to their parent container. Default icon size is 48px by 48px.",
        type: 'boolean',
        fieldset: 'layout_options'
      },
      {
        type: 'array',
        name: 'icons',
        title: 'Items',
        validation: Rule => [
            Rule.min(3),
            Rule.max(4)
        ],
        of:[
          {type: 'icon_copy'}
        ]
      }
    ],
    preview: {
      select: {
          icon: 'icons.0.icon.asset.url'
      },
      prepare ({icon}) {
      return {
        title: 'Columns: Text & Icons',
        media: <img src={icon} alt="" />
      }
    }
  }
}