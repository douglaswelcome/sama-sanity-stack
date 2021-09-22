export default {
  type: 'object',
  name: 'bodystatic_bragBar',
  title: 'Brag Bar',
  options: {
    collapsible: true,
    collapsed: false
  },
  fields:[
      {
          type: 'boolean',
          name: 'align_left',
          title: 'Align Logos Left'
      },
      {
          type: 'array',
          name: 'logos',
          title: 'Logos',
          validation: Rule => [
              Rule.min(1),
              Rule.max(8)
          ],
          of:[
              {
                  type: 'image',
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
              } 
          ]
      }
  ],
  preview: {
      select: {
          media: 'logos.0'
      },
      prepare ({media}) {
        return {
          title: 'Brag Bar',
          media
        }
      }
  }
}