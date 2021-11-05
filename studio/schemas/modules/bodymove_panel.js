import React from 'react'

export default {
    type: 'object',
    name: 'bodymove_panel',
    title: 'Carousel Panel Slides',
    options: {
      collapsible: true,
      collapsed: false
    }, 
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Carousel Title',
            description: '(Optional) Title that appears at the top of each slide panel'
        },
        {
            type: 'array',
            name: 'slides',
            title: 'Slides',
            validation: Rule => [
                Rule.min(2),
                Rule.max(6)
            ],
            of: [
                {
                    type: 'object',
                    name: 'panel_slide',
                    title: 'Panel Slide',
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            title: 'Title'
                        },
                        {
                            type: 'richText_field',
                            name: 'body',
                            title: 'Body'
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
            slides: 'slides.0.title',
            image: 'slides.0.image.asset.url'
        },
        prepare ({slides, image}) {
          return {
            title: `Carousel Panel Slides: ${slides}...`,
            media: <img src={image} alt="" />
          }
        }
    }
}