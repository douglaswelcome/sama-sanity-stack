import { GrObjectGroup } from "react-icons/gr";

export default {
    type: 'object',
    name: 'page_sections',
    title: 'Page Sections',
    initialValue: {
        background_color: ''
    },
    fields: [
        {
            type: "string",
            name: 'background_color',
            title: "Section Background Color",
            options: {
                list: [
                  { title: 'Charcoal 0', value: 'umoja-u-bg--charcoal0' },
                  { title: 'Charcoal 1 (Default)', value: '' },
                  { title: 'Charcoal 2', value: 'umoja-u-bg--charcoal2'},
                  { title: 'Charcoal 3', value: 'umoja-u-bg--charcoal3'},
                  { title: 'Charcoal 4', value: 'umoja-u-bg--charcoal4'},
                  { title: 'Charcoal 5', value: 'umoja-u-bg--charcoal5'},
                  { title: 'White', value: 'umoja-u-bg--white'}
                ],
            },
        },
        {
            name: 'modules',
            type: 'page_modules',
            title: 'Section Modules'
        }
    ],
    preview: {
        select: {
          title: 'modules.modules.0._type'
        },
        prepare ({title}) {
          return {
            title: title,
            media: GrObjectGroup
          }
        }
      }
}