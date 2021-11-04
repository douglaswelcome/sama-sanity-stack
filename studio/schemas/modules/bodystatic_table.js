import {BiTable} from 'react-icons/bi'

export default {
    type: 'object',
    name: 'bodystatic_table',
    title: 'Table',
    options: {
      collapsible: true,
      collapsed: false
    }, 
    fields:[
        {
            name:'columns',
            title: 'Columns',
            type: 'array',
            validation: Rule => [
                Rule.min(2),
                Rule.max(6)
            ],
            of:[{type: 'table_col'}]
        },
        {
            name: 'rows',
            title: 'Rows',
            type: 'array',
            of:[{type: 'table_row'}]
        }
    ],
    preview: {
        select: {
            cols: 'columns',
        },
        prepare ({cols}) {
            let title = "Table: ";
            cols.map((col, i) => {
                title += `${col.header}`;
                if(i < (cols.length - 1)){
                  title += `, `;
                }
            });
          return {
            title: title,
            media: BiTable
          }
        }
    }
}