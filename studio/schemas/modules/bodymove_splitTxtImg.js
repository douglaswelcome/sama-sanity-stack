export default {
    type: 'object',
    name: 'bodymove_splitTxtImg',
    title: 'Carousel Two Column Slides',
    options: {
      collapsible: true,
      collapsed: false
    }, 
    fields:[
        {
            title: 'Slides',
            type: 'array',
            name: 'slides',
            validation: Rule => [
                Rule.min(2),
                Rule.max(6)
            ],
            of: [
                {type: 'bodymove_splitTxtImg_slide'}
            ]
        }
    ],
    preview: {
        select: {
            slides: 'slides'
        },
        prepare ({slides}) {
            let title = "Carousel Two Column Slides: ";
            slides.map((slide, i) => {
                title += `${slide.title}`;
                if(i < (slides.length - 1)){
                  title += `, `;
                }
            });
          return {
            title: title
          }
        }
    }
}