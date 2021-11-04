export default {
    type: 'object',
    name: 'bullet_icon',
    title: 'Bullet Icon',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Title'
        },
        {
            type: 'richText_field',
            name: 'body',
            title: 'Content'
        },
        {
            type: 'image',
            name: 'icon',
            title: 'Icon'
        }
    ],
    preview: {
        select: {
            body: 'body.richText.0.children.0.text',
            bullet_title: 'title',
            media: 'icon'
        },
        prepare ({bullet_title, body, media}) {
            let title = bullet_title ? bullet_title : body;
            return {
                title: title,
                media: media
            }
        }
    }
}