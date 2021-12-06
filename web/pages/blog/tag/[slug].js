import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import client from '../../../client'
import { postsByTagQuery, getPostsByTagSlug, getAllPostSlugs } from '../../../libs/queries'
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('../../../components/Layout'));
import BlogPost from '../../../components/blog/blog_postCard/blog_postCard';
import styles from './blog-tag.module.scss'

const PostTag = ({ data = {}, config }) => {
    const router = useRouter();
    const posts = data?.posts;

    if (posts == undefined || !router.isFallback && !data.slug) {
      return <ErrorPage statusCode={404} />
    }

    const firstPosts = posts.slice(0, 12);
    const tagName = data?.tagName;

    return (
      <Layout config={config}>
        <section className="umoja-l-grid-section umoja-u-bg--white">
          <div className="umoja-l-grid--12">
            <div className={styles.name}>
              <h1>{tagName}</h1>
            </div>
          </div>
        </section>
        <section className="umoja-l-grid-section umoja-u-bg--white">
          <div className="umoja-l-grid--12 umoja-l-grid-gap--row-1">
              {firstPosts.map((post, i) => {
                  return <BlogPost {...post} hideTag={true} key={i} />
              })}
          </div>
        </section>
      </Layout>
    )
}

export async function getStaticProps({ params }) {
    const tag = await getPostsByTagSlug(params.slug);

    const {posts} = await client.fetch(postsByTagQuery, {
        tag: tag.tag,
    })
  
    return {
      props: {
        data: {
            posts,
            slug: params.slug,
            tagName: tag.tag
        },
      },
    }
  }

export async function getStaticPaths() {
    const paths = await getAllPostSlugs();

    return {
      paths: paths.map((slug) => ({params: { slug} })),
      fallback: true,
    }
}

export default PostTag