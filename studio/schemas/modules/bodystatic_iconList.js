import React from 'react'

export default {
    type: 'object',
    name: 'bodystatic_iconList',
    title: 'Icon Bullet List',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
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
        title: 'Icon Bullet List',
        media: <img src={icon} alt="" />
      }
    }
  }
}