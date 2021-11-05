import React from 'react'

export default {
    type: 'object',
    name: 'avatar',
    title: 'Avatar',
    fields: [
        {
            type: 'string',
            name: 'name',
            title: 'Name'
        },
        {
            type: 'string',
            name: 'title',
            title: 'Job Title'
        },
        {
            type: 'image',
            name: 'image',
            title: 'Image'
        }
    ],
    preview: {
        select: {
            title: 'name',
            image: 'image.asset.url'
        },
        prepare ({title, image}) {
        return {
          title,
          media: <img src={image} alt={title} />
        }
      }
    }
}