import {FaCode } from 'react-icons/fa'

export default {
    type: "object",
    name: "embed",
    title: "Embed",
    icon: FaCode,
    fields: [
      {
        name: "code",
        type: "text",
        description: "Paste in your embed code"
      }
    ],
    preview: {
        select: {
          title: "code"
        },
        prepare ({title}) {
          return {
            title: title,
            media: FaCode
          }
        }
    }
  }