import React from 'react'

export default {
    type: 'object',
    name: 'bodystatic_flowRow',
    title: 'Flow Graph Row',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
        {
            type: 'array',
            title: 'Row Items',
            name: 'items',
            validation: Rule => [
                Rule.min(1),
                Rule.max(3)
            ],
            of: [
                {
                    type: 'object',
                    name: 'item',
                    title: 'Item',
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            title: 'Title'
                        },
                        {
                            type: 'number',
                            name: 'backgroundSize',
                            title: 'Background Image size',
                            description: 'Percent'
                        },
                        {
                            type: 'image',
                            name: 'image',
                            title: 'Image',
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
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            items: 'items.0.title',
            image: 'items.0.image.asset.url'
        },
        prepare ({items,image}) {
            return {
                title: `Two Column Panels: ${items}...`,
                media: <img src={image} alt="" />
            }
        }
    }
}