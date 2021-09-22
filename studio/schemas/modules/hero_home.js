export default {
  type: 'object',
  name: 'hero_home',
  title: 'Home Hero',
  options: {
    collapsible: true,
    collapsed: false
  },
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline'
    },
    {
      name: 'cta',
      type: 'button',
      title: 'CTA'
    },
    {
      name: 'image',
      type: 'image',
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
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    },
    prepare ({title, media}) {
      return {
        title: 'Home Hero',
        media
      }
    }
  }
}
