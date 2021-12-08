import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import client from '../client'
import { pageQuery, pageSlugsQuery } from '../libs/queries'
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('../components/Layout'))
const RenderSection = dynamic(() => import('../components/RenderSection'))

const Page = ({ data = {}, config }) => {
  const router = useRouter();
  const slug = data?.page?.slug;
  const sections = data?.page?.sections;
  if (data.page == undefined || !router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }
  const pageConfig = {
    ...config,
    ...data.page?.config
  }

  return (
    <Layout config={pageConfig}>
      {sections &&
        sections.map((section) => {
          return <RenderSection modules={section.modules} background_color={section.background_color} key={section._key} />
        })
      }
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { page} = await client.fetch(pageQuery, {
    slug: params.slug,
  })

  const sections = page?.sections;
  if(sections){
    sections.map(section =>{
      let {modules} = section;
      modules.map((module, i) =>{
        if(module.ref_modules){
          let refs = module.ref_modules;
          modules.splice(i, 1 , ...refs);
        }
      });
    })
  }

  return {
    props: {
      data: {
        page
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(pageSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export default Page