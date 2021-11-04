import {RiTableLine} from 'react-icons/ri'

export default {
    type: 'object',
    name: 'table_col',
    title: 'Table Column',
    fields:[
        { 
            type: 'string',
            title: 'Column Header',
            name: 'header'
        },
        {
            type: 'boolean',
            title: 'Leave Column Header Empty',
            name: 'empty_head'
        },
        {
            type: 'string',
            title: 'Column Subheader',
            name: 'subheader'
        },
        {
            type: 'image',
            name: 'icon',
            title: 'Icon'
        }
    ],
    preview: {
        select: {
            title: 'header',
        },
        prepare ({title}) {
            return {
                title: title,
                media: RiTableLine
            }
        }
    }
}