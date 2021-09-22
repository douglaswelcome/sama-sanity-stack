const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '76e3r62u', // you can find this in sanity.json
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})

module.exports = client