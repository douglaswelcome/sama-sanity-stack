import {BsCardText} from 'react-icons/bs'

export default {
    type: 'object',
    name: 'bodystatic_cardImg',
    title: 'Cards Row',
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
            name: "full_width",
            title: "Full Width Images",
            description: "Make Images full width of card. Default icon size of 48px by 48px.",
            type: 'boolean',
            fieldset: 'layout_options'
        },
        {
            type: 'array',
            name: 'cards',
            title: 'Cards',
            validation: Rule => [
                Rule.min(1),
                Rule.max(4)
            ],
            of:[
              {type: 'icon_copy'}
            ]
        }
    ],
    preview: {
        prepare () {
            return {
                title: 'Cards Row',
                media: BsCardText
            }
        }
    }
}