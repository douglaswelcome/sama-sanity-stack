import {BiRecycle} from 'react-icons/bi'

export default {
    type: 'object',
    name: 'reusable_modules_module',
    title: 'Reusable Module',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
      {
        title: 'Module Reference',
        name: 'module_ref',
        type: 'reference',
        to: [{type: 'reusable_module'}]
      }
    ],
    preview: {
      select: {
        title: 'module_ref.title'
      },
      prepare ({title}) {
        return {
          title: title,
          media: BiRecycle
        }
      }
    }
  }