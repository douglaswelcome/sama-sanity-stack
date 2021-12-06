import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import client from '../../client'
import { postQuery, postSlugsQuery } from '../../libs/queries'
import dynamic from "next/dynamic";
import BlogHeroPost from '../../components/blog/blog_heroPost/blog_heroPost';
import BlogPostFooter from '../../components/blog/blog_postFooter/blog_postFooter';
import RichText from '../../components/richText_field/richText_field'
const Layout = dynamic(() => import('../../components/Layout'))
import styles from "./blog-post.module.scss"

const Post = ({ data = {}, config }) => {
    const router = useRouter();
    const post = data?.post;

    if (post == undefined || !router.isFallback && !post.slug) {
      return <ErrorPage statusCode={404} />
    }

    const {tags, author, body} = post;
  
    return (
      <Layout config={config}>
        <BlogHeroPost {...post} />
        <section className="umoja-l-grid-section umoja-u-bg--white">
          <div className={`umoja-l-grid--12 ${styles.body}`}>
            <RichText className={styles.content} richText={body} align="left" />
          </div>
        </section>
        <BlogPostFooter tags={tags} author={author} />
      </Layout>
    )
  }


export async function getStaticProps({ params }) {
    const {post} = await client.fetch(postQuery, {
      slug: params.slug,
    })
  
    return {
      props: {
        data: {
          post
        },
      },
    }
  }
  
export async function getStaticPaths() {
  const paths = await client.fetch(postSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export default Post