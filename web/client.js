const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25',
  //token: process.env.SANITY_API_TOKEN,
  useCdn: true// `false` if you want to ensure fresh data
})

module.exports = client