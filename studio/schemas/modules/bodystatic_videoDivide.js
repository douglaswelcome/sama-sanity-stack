export default {
    type: 'object',
    name: 'bodystatic_videoDivide',
    title: 'Video Content Divider',
    options: {
      collapsible: true,
      collapsed: false
    },
    fields: [
        {
            type: "file",
            name: "video",
            title: "Video",
            options: {
                accept: "video/*"
            }
        },
    ],   
    preview: {
        prepare () {
          return {
            title: "Video Divider"
          }
        }
    }
}