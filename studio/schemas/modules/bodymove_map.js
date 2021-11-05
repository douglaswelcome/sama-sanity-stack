import {FiMapPin} from 'react-icons/fi'

export default {
    type: 'object',
    name: 'bodymove_map',
    title: 'Offices Map (Static)',
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
            media: FiMapPin
          }
        }
    }
}