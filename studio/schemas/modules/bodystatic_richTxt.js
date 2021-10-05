import {BiFont} from 'react-icons/bi'

export default {
    type: 'object',
    name: 'bodystatic_richTxt',
    title: 'Rich Text',
    options: {
      collapsible: true,
      collapsed: false
    },
    initialValue: {
        align: 'left',
        size: 'h2'
    },
    fields:[
        {
            type: 'string',
            name: 'align',
            title: 'Text Alignment',
            options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Center', value: 'center'},
                  { title: 'Right', value: 'right'}
                ],
            },
        },
        {
            title: 'Content',
            name: 'text',
            type: 'array',
            of: [
              {
                type: 'block',
                styles: [
                  { title: 'Normal', value: 'normal' },
                  { title: 'H1', value: 'h1' },
                  { title: 'H2', value: 'h2' },
                  { title: 'H3', value: 'h3' },
                  { title: 'H4', value: 'h4' },
                  { title: 'H5', value: 'h5' },
                ],
                marks: {
                  decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                  ],
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
        }
    ],
    preview: {
      select: {
        title: 'text.0.children.0.text'
      },
      prepare ({title}) {
        return {
          title: title,
          media: BiFont
        }
      }
    }
}