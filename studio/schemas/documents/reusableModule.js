//import { MyCustomObject } from "../../src/components/MyCustomObject"
import {RiRecycleLine} from "react-icons/ri"

export default {
    name: 'reusable_module',
    type: 'document',
    title: 'Reusable Content Module',
    icon: RiRecycleLine,
    fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => [
            Rule.required().error('We need a title before publishing'),
            Rule.max(100).warning('Shorter titles are usually better')
          ]
        },
        {
            name: 'module',
            type: 'page_modules',
        }
    ],   
    preview: {
      select: {
        title: 'title',
      }
    }
}