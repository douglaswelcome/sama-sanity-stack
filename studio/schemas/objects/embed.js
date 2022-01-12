import {FaCode } from 'react-icons/fa'

export default {
    type: "object",
    name: "embed",
    title: "Embed",
    icon: FaCode,
    fields: [
<<<<<<< HEAD
        {
            name: "type",
            type: "string",
            title: 'Type',
            options: {
                list: [
                    { title: 'Vimeo', value: 'vimeo'},
                    { title: 'Youtube', value: 'youtube' }
                ],
            },
=======
      {
        name: "code",
        type: "text",
        description: "Paste in your embed code"
      }
    ],
    preview: {
        select: {
          title: "code"
>>>>>>> develop
        },
        prepare ({title}) {
          return {
            title: title,
            media: FaCode
          }
        }
    }
  }