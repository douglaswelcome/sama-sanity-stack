import groq from 'groq'
import client from '../client'
import Layout from '../components/Layout'
import RenderSection from '../components/RenderSection'

const Page = (props) => {
  const {sections, config} = props;

  return (
      <Layout config={config}>
        {sections &&
          sections.map((section) => {
             return <RenderSection {...section} key={section._key} />
          })
        }
      </Layout>
  )
}

Page.getInitialProps = async function({query}) {
  const {slug} = query

  if (slug && slug !== '/') {
    return await client.fetch(`
      *[_type == "page" && slug.current == $slug]{
        title,
        slug,
        "sections": sections[]{
          _key,
          background_color,
          "modules": modules.modules[]{
            ...,
             text[]{
               ...,
               markDefs[]{
                 ...,
                 internalLink->{
                   slug
                 }
               }
             }
           }
        }
      }[0]
    `, { slug })
  }
}

export default Page