export default {
    type: 'object',
    name: 'bodystatic_galleryGrid',
    title: 'Gallery Grid',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields:[
        {
            type: 'array',
            name: 'gridItems',
            title: 'Grid Items',
            validation: Rule => [
                Rule.min(2),
                Rule.max(6)
            ],
            of:[
              {type: 'grid_image'}
            ]
          }
    ],
    preview: {
        select: {
            items: 'gridItems'
        },
        prepare ({items}) {
            let title = "Grid: ";
            items.map((item, i) => {
                title += `${item.title}`;
                if(i < (items.length - 1)){
                  title += `, `;
                }
            });
          return {
            title: title
          }
        }
    }
}