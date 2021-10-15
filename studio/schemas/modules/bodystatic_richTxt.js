import {BiFont} from 'react-icons/bi'

export default {
    type: 'object',
    name: 'bodystatic_richTxt',
    title: 'Rich Text',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type: 'richText_field',
            name: 'richText',
            title: 'Content'
        }
    ],
    preview: {
      select: {
        title: 'richText.richText.0.children.0.text'
      },
      prepare ({title}) {
        return {
          title: title,
          media: BiFont
        }
      }
    }
}