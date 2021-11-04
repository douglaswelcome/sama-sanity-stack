import {RiLayoutRowLine} from 'react-icons/ri'

export default {
    type: 'object',
    name: 'table_row',
    title: 'Table Row',
    fields:[
        { 
            type: 'string',
            title: 'Row Header',
            name: 'header'
        },
        {
            type: 'array',
            title: 'Row Cells',
            name: 'cells',
            of: [{type: 'table_rowCell'}]
        }
    ],
    preview: {
        select: {
            title: 'header',
        },
        prepare ({title}) {
            return {
                title: title,
                media: RiLayoutRowLine
            }
        }
    }
}