import {BiSquare} from 'react-icons/bi'

export default {
    type: 'object',
    name: 'table_rowCell',
    title: 'Table Row Cell',
    fields:[
        { 
            type: 'richText_field',
            title: 'Cell Text Content',
            name: 'body'
        },
        {
            type: 'array',
            title: 'Cell Bullet Icon List',
            name: 'bullets',
            of:[{type: 'bullet_icon'}]
        }
    ],
    preview: {
        select: {
            body: 'body.richText.0.children.0.text',
            bullet_title: 'bullets.0.title',
            bullet_body: 'bullets.0.body.richText.0.children.0.text',
        },
        prepare ({bullet_title, bullet_body, body}) {
            let title = body;
            if(!title && bullet_title){
                title = bullet_title;
            }else{
                title = bullet_body;
            }
            return {
                title: title,
                media: BiSquare
            }
        }
    }
}