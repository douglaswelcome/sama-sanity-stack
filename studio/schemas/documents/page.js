export default {
    name: 'page',
    type: 'document',
    title: 'Pages',
    fieldsets: [
      {
        title: 'SEO & metadata',
        name: 'metadata',
        options: {
          collapsible: true,
          collapsed: true,
          columns: 2
        }
      }
    ],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => [
          Rule.required().error('We need a title before publishing'),
          Rule.max(100).warning('Shorter titles are usually better')
        ]
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: "title",
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'This description populates meta-tags on the webpage',
        fieldset: 'metadata'
      },
      {
        name: 'openGraphImage',
        type: 'image',
        title: 'Open Graph Image',
        description: 'Image for sharing previews on Facebook, Twitter etc.',
        fieldset: 'metadata'
      },
      { 
        name: 'sections',
        type: 'sections',
        title: 'Page Sections'
      }
    ],
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  