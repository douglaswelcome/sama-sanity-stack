import React from 'react'

export default {
    type: 'object',
    name: 'bodystatic_leadTeam',
    title: 'Lead Team Avatars',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
        {
            type: 'array',
            name: 'avatars',
            title: 'Team Member Avatars',
            description: 'The first person in this list will be in the team lead position',
            of:[{type: 'avatar'}]
        }
    ],
    preview: {
        select: {
            icon: 'avatars.0.image.asset.url'
        },
        prepare ({icon}) {
        return {
          title: 'Lead Team Avatars',
          media: <img src={icon} alt="" />
        }
      }
    }
}