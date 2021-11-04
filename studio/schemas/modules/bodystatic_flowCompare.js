import {BiLineChart} from 'react-icons/bi'

export default {
    type: 'object',
    name: 'bodystatic_flowCompare',
    title: 'Flow Compare Chart',
    options: {
      collapsible: true,
      collapsed: false
    },
    fieldsets: [
        {
            title: 'Item 1',
            name: 'item1',
            options: {
              collapsible: true,
              collapsed: false
            }
        },
        {
            title: 'Item 2',
            name: 'item2',
            options: {
              collapsible: true,
              collapsed: false
            }
        },
        {
            title: 'Conclusion',
            name: 'conclusion',
            options: {
              collapsible: true,
              collapsed: false
            }
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'item1_title',
            title: 'Title',
            fieldset: 'item1'
        },
        {
            type: 'richText_field',
            name: 'item1_content',
            title: 'Content',
            fieldset: 'item1'
        },
        {
            type: 'string',
            name: 'item2_title',
            title: 'Title',
            fieldset: 'item2'
        },
        {
            type: 'richText_field',
            name: 'item2_content',
            title: 'Content',
            fieldset: 'item2'
        },
        {
            type: 'string',
            name: 'con_pretitle',
            title: 'Pretitle',
            fieldset: 'conclusion'
        },
        {
            type: 'string',
            name: 'con_title',
            title: 'Title',
            fieldset: 'conclusion'
        },
        {
            type: 'richText_field',
            name: 'con_content',
            title: 'Content',
            fieldset: 'conclusion'
        }
    ],
    preview: {
        prepare () {
            return {
                title: 'Flow Compare Chart',
                media: BiLineChart
            }
        }
    }
}
