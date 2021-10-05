export default {
    widgets: [
        {
        name: 'netlify',
        options: {
          title: 'Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: '78b6bc93-7d67-47d0-9ec9-a45db138ad3a',
              buildHookId: '615c8a10ab5be10e2f1d58f7',
              name: 'sama-sanity',
            },
            {
              title: 'Sama Frontend',
              apiId: 'd534ccae-4025-4e36-acba-13ebcd5a7dff',
              buildHookId: '615c8aa866dba816eae9e2a6',
              name: 'sama-next',
              url: 'https://sama-next.netlify.app',
            }
          ]
        }
      }
    ]
  }