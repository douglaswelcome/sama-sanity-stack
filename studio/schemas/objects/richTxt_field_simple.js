import {BiFont} from 'react-icons/bi'

export default {
    type: 'object',
    name: 'richText_field_simple',
    title: 'Rich Text Simple',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
      {
        title: 'Rich Text',
        name: 'richText',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [],
            lists: [],
            marks: {
              decorators: [],
              annotations: [
                {
                  name: 'button_link',
                  type: 'object',
                  title: 'Link',
                  blockEditor: {
                    icon: () => '🔗',
                  },
                  fields: [
                    {
                      title: 'Internal Link',
                      name: 'internalLink',
                      description: 'Select pages for navigation',
                      type: 'reference',
                      to: [{ type: 'page' }], 
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
            },
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'richText.0.children.0.text'
      },
      prepare ({title}) {
        return {
          title: title,
          media: BiFont
        }
      }
    }
}