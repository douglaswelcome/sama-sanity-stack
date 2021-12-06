import {BsPersonCircle} from "react-icons/bs"

export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    icon: BsPersonCircle,
    fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          options: {
            source: "name",
            maxLength: 96
          },
          validation: Rule => Rule.required()
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio'
        },
        {
            name: 'avatar',
            type: 'image',
            title: 'Headshot'
        }
    ],   
    preview: {
      select: {
        title: 'name',
        media: 'avatar'
      }
    }
}