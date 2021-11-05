export default {
    type: 'object',
    name: 'bodystatic_vidCenter',
    title: 'Video Center',
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
            title: "Video Center"
          }
        }
    }
}