import groq from 'groq'
import client from '../../client'
import Layout from '../../components/Layout'
import RenderSection from '../../components/RenderSection'

const Page = (props) => {

  const {title, sections, config} = props;

  return (
      <Layout config={config}>
        <p>{title}</p>
{/*           {sections.map((section) => {
             return <RenderSection modules={section.modules} key={section._key} />
          })} */}
      </Layout>
  )
}

Page.getInitialProps = async function({query}) {
  const {slug} = query
  
  // Frontpage
  if (slug == '/') {
    return await client.fetch(
      groq`
      *[_id == "global-config"][0]{
        frontpage -> {
          title,
          sections
        }
      }
    `
    )
    .then(res => ({...res.frontpage, slug}))
  }

  if (slug && slug !== '/') {
    return await client.fetch(`
      *[_type == "page" && slug.current == $slug][0]
    `, { slug })
  }
}

export default Page