export default {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
      {
        title: 'Internal Page',
        name: 'internalLink',
        description: 'Select pages for navigation',
        type: 'reference',
        to: [{ type: 'page' }], 
      },
      {
        title: 'Internal Page Custom URL',
        description:"Use for internal pages not created in Sanity (e.g. dynamically created page templates)",
        type: 'string',
        name: 'internalLink_custom'
      },
      {
        name: 'externalUrl',
        title: 'External URL',
        description:"Use fully qualified URLS for external link",
        type: 'url',
        validation: Rule =>
          Rule.uri({
            allowRelative: true,
            scheme: ['https', 'http', 'mailto', 'tel'],
          }),
      },
      {
        name: 'file',
        title: 'File',
        type: 'file'
      }
    ]
};