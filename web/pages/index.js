import client from '../client'
import {indexQuery } from '../libs/queries'
import Layout from '../components/Layout'
import RenderSection from '../components/RenderSection'

const Index = (props) => {
    const {page, config} = props;
    const {sections} = page;

    return (
      <Layout config={config}>
      {sections &&
        sections.map((section) => {
          return <RenderSection modules={section.modules} background_color={section.background_color} key={section._key} />
        })
      }
    </Layout>
    )
}

export async function getStaticProps() {
    const home = await client.fetch(indexQuery);

    const sections = home?.sections;
    sections.map(section =>{
      let {modules} = section;
      if(modules){
        modules.map((module, i) =>{
          if(module.ref_modules){
            let refs = module.ref_modules;
            modules.splice(i, 1 , ...refs);
          }
        });
      }
    })
    
    return {
        props: {
          page: home,
        },
    }
}

export default Index;