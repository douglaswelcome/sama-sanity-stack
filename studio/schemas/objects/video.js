export default {
    name: 'video',
    type: 'object',
    title: 'Video',
    fields: [
        {
            type: "file",
            name: "video",
            title: "Video",
            options: {
                accept: "video/*"
            }
        },
        {
            type: "video_embed",
            name: "embed",
            title: "Embed"
        }
    ]
};