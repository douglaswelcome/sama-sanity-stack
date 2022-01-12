import React from 'react'
import { FaPaperclip, FaCode } from 'react-icons/fa'

export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fieldsets: [
        {
          title: 'SEO & Metadata',
          name: 'metadata',
          options: {
            collapsible: true,
            collapsed: true,
            columns: 2
          }
        }
    ],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => [
              Rule.required().error('We need a title before publishing'),
              Rule.max(100).warning('Shorter titles are usually better')
            ]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: "title",
              maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'tags',
        },
        {
            name: "body",
            title: "Post Body",
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'Title', value: 'title'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'Quote', value: 'blockquote'},
                        {title: 'Caption', value: 'caption'}
                    ],
                    marks: {
                        annotations: [
                            {
                                name: 'button_link',
                                type: 'object',
                                title: 'Link',
                                blockEditor: {
                                    icon: FaPaperclip
                                },
                                fields: [
                                    {
                                    title: 'Internal Link',
                                    name: 'internalLink',
                                    description: 'Select pages for navigation',
                                    type: 'reference',
                                    to: [{ type: 'page' }, {type: 'post'}], 
                                    },
                                    {
                                    name: 'externalUrl',
                                    title: 'External URL',
                                    description:"Use fully qualified URLS for external link",
                                    type: 'url',
                                    validation: Rule =>
                                        Rule.uri({
                                        allowRelative: true,
                                        scheme: ['https', 'http', 'mailto', 'tel'],
                                        }),
                                    },
                                    {
                                    name: "style",
                                    type: "string",
                                    title: 'Optional Link Style',
                                    options: {
                                        list: [
                                            { title: 'Button Primary', value: ''},
                                            { title: 'Button Secondary', value: 'secondary' },
                                            { title: 'Arrow CTA', value: 'arrow'}
                                        ],
                                    },
                                    }
                                ]
                            }
                        ],
                    }
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            type: 'link',
                            name: 'link',
                            title: 'Image Link'
                        }
                    ]
                },
                {
                    type: 'embed',
                    name: 'embed',
                    title: 'Embed'
                }
            ]
        },
        {
            name: 'featured_image',
            title: 'Featured Image',
            type: 'image',
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
            name: 'seo_title',
            type: 'string',
            title: 'SEO Title',
            fieldset: 'metadata'
        },
        {
            name: 'meta_description',
            type: 'text',
            title: 'Description',
            description: 'This description populates meta-tags on the webpage',
            fieldset: 'metadata'
        },
        {
            name: 'openGraphImage',
            type: 'image',
            title: 'Open Graph Image',
            description: 'Image for sharing previews on Facebook, Twitter etc.',
            fieldset: 'metadata'
        },
    ],
    preview: {
        select: {
          title: 'title',
          image: 'featured_image.asset.url'
        },
        prepare ({title, image}) {
          return {
            title,
            media: <img src={image} alt="" />
          }
        }
    }
}