import groq from 'groq'
import client from '../client'
import Layout from '../components/Layout'
import RenderSection from '../components/RenderSection'

const Index = (props) => {
    const {page, config} = props;
    const {sections} = page.frontpage;

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
export async function getStaticProps({ preview, previewData }) {
    const pageData = await client.fetch(
        groq`*[_id == "global-config"][0]{
          frontpage -> {
            title,
            slug,
            "sections": sections[]{
              _key,
              background_color,
              "modules": modules.modules
            }
          }
        }
      `
    )

    return {
        props: {
          page: pageData,
        },
    }
}

export default Index;