import {BsChatText} from 'react-icons/bs'

export default {
    type: 'object',
    name: 'bodystatic_punchyTxt',
    title: 'Punchy Text CTA',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type: 'string',
            name: 'header',
            title: 'Header'
        },
        {
            type: 'string',
            name: 'subheader',
            title: 'Subheader'
        },
    ],
    preview: {
        select: {
            title: 'header'
        },
        prepare ({title}) {
          return {
            title: title,
            media: BsChatText
          }
        }
    }
}