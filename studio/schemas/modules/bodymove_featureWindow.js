export default {
    type: 'object',
    name: 'bodymove_featureWindow',
    title: 'Feature Window',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
      {
        type: 'array',
        name: 'features',
        title: 'Features',
        of:[
          {
            type: 'object',
            name: 'feature',
            title: 'Feature',
            fields: [
              {
                  type: 'string',
                  name: 'title',
                  title: 'Title'
              },
              {
                  type: 'text',
                  name: 'description',
                  title: 'Description'
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
              {
                type: 'lottie',
                name: 'animation',
                title: 'Lottie SVG Animation'
              }
            ]
          }
         ]
        }
     ],
     preview: {
       prepare () {
       return {
         title: 'Feature Window',
       }
     }
   }
 }