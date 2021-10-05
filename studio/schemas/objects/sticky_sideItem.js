export default {
    type: 'object',
    name: 'sticky_sideItem',
    title: 'Sticky Side Item',
    fields: [
        {
            type: "string",
            name: "title",
            title: "Title"
        },
        {
            type: "text",
            name: "text",
            title: "Text"
        },
        {
            type: "file",
            name: "video",
            title: "Video",
            options: {
                accept: "video/*"
            }
        },
        {
            type: 'image',
            name: 'image',
            title: 'Image',
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
            title: 'title'
        },
        prepare ({title}) {
          return {
            title: title
          }
        }
    }
}