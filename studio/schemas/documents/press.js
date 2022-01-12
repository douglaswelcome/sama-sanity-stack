export default {
    name: 'press',
    type: 'document',
    title: 'Press',
    fields: [
        {
            type: 'date',
            name: 'date',
            title: 'Date'
        },
        {
            type: 'string',
            name: 'type',
            title: 'Type',
            options: {
                list: [
                    { title: 'News', value: 'News'},
                    { title: 'Press Release', value: 'Press Release' }
                ],
            }
        },
        {
            type: 'string',
            name: 'publication_source',
            title: 'Publication Source'
        },
        {
            type: 'string',
            name: 'headline',
            title: 'Headline'
        },
        {
            type: 'image',
            name: 'publication_icon',
            title: 'Publication Icon',
            fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  options: {
                    isHighlighted: true
                  }
                }
            ],
        },
        {
            type: 'url',
            name: 'article_url',
            title: 'Article URL',
        },
        {
            type: 'boolean',
            name: 'featured',
            title: 'Featured'
        },
        {
            type: 'number',
            name: 'featured_order',
            title: 'Featured Order'
        },
        {
            type: 'image',
            name: 'background',
            title: 'Background',
            fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  options: {
                    isHighlighted: true
                  }
                }
            ],
        },
    ],
    preview: {
        select: {
            title: 'headline',
            media: 'publication_icon'
        },
        prepare ({title, media}) {
        return {
          title,
          media
        }
      }
    }
}