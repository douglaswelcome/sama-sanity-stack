import {FiMapPin} from 'react-icons/fi'

export default {
    type: 'object',
    name: 'bodymove_sfMap',
    title: 'SF Office Map (Static)',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
          name: 'address',
          type: 'richText_field',
          title: 'Address'
        }
    ],
    preview: {
        select: {
          title: 'title'
        },
        prepare ({title}) {
          return {
            title: title,
            media: FiMapPin
          }
        }
    }
}