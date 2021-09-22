import React from 'react'

export default {
    type: 'object',
    name: 'bodystatic_iconCopy',
    title: 'Icon Copy List',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
       {
        type: 'array',
        name: 'icons',
        title: 'Icons',
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
        title: 'Icon Copy List',
        media: <img src={icon} alt="" />
      }
    }
  }
}