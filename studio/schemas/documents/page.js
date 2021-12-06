export default {
    name: 'page',
    type: 'document',
    title: 'Pages',
    fieldsets: [
      {
        title: 'SEO & Metadata',
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
        name: 'internal_title',
        type: 'string',
        title: 'Internal Page Title (Optional)',
        description: 'Display a different page title in the CMS Interface'
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
        type: 'array',
        name: 'sections',
        title: 'Page Sections',
        of: [
          {
            type: 'page_sections',
          }
        ]
      },
    ],
    preview: {
      select: {
        title: 'title',
        internal_title: 'internal_title'
      },
      prepare ({title, internal_title}) {
        const displayTitle = internal_title ? internal_title : title;
        return {
          title: displayTitle
        }
      }
    }
  }
  