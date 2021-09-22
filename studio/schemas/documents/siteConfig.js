import { GrSettingsOption } from "react-icons/gr";

export default {
    name: 'siteConfig',
    type: 'document',
    title: 'Site Settings',
    icon: GrSettingsOption,
    __experimental_actions: [/* "create", "delete", */ 'update', 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Site title',
      },
      {
        title: 'URL',
        name: 'url',
        type: 'url',
        description: 'The main site url. Used to create canonical url',
      },
      {
        title: 'Logo',
        name: 'logo',
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessiblity.',
            options: {
              isHighlighted: true,
            },
          },
        ],
      },
      {
        name: 'frontpage',
        type: 'reference',
        description: 'Choose page to be the frontpage',
        to: { type: 'page' },
      },
      {
        title: 'Main navigation',
        name: 'mainNav',
        description: 'Select menu for main navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
      {
        title: 'Footer navigation',
        name: 'footerNav',
        description: 'Select menu for footer navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
    ],
  };