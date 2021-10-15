export default {
    type: 'object',
    name: 'bodystatic_tabs',
    title: 'Tabs',
    options: {
      collapsible: true,
      collapsed: false
    }, 
    fields: [
        {
            type: 'array',
            name: 'tabs',
            title: "Tabs",
            validation: Rule => [
                Rule.min(1),
                Rule.max(6)
            ],
            of:[
              {type: 'tab'}
            ]
        }
    ],
    preview: {
        select: {
            tabs: 'tabs'
        },
        prepare ({tabs}) {
            let title = "Tabs";
            tabs.map((tab, i) => {
                title += ` ,${tab.title}`;
            });
          return {
            title: title
          }
        }
    }
}
