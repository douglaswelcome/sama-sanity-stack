export default {
    type: 'object',
    name: 'bodymove_stickySideScroll',
    title: 'Stick Side Scroll',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
        {
            type: "string",
            name: "heading",
            title: "Heading"
        },
        {
            type: "text",
            name: "description",
            title: "Description"
        },
        {
            type: "array",
            title: "Items",
            name: "items",
            of: [
                {type: "sticky_sideItem"}
            ]
        }
    ],
    preview: {
        select: {
            title: 'heading'
        },
        prepare ({title}) {
          return {
            title: title
          }
        }
    }
}