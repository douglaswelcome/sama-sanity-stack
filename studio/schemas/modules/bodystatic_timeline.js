import {BiTimeFive} from 'react-icons/bi'

export default {
    type: 'object',
    name: 'bodystatic_timeline',
    title: 'Sama Timeline (Static)',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        }
    ],
    preview: {
        select: {
          title: 'title'
        },
        prepare ({title}) {
          return {
            title: title,
            media: BiTimeFive
          }
        }
    }
}