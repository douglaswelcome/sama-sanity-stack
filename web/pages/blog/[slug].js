import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import client from '../../client'
import { postQuery, postSlugsQuery } from '../../libs/queries'
import dynamic from "next/dynamic";
import BlogHeroPost from '../../components/blog/blog_heroPost/blog_heroPost';
import BlogPostFooter from '../../components/blog/blog_postFooter/blog_postFooter';
import BlogSmallCardRow from '../../components/blog/blog_smallCard_row/blog_smallCard_row';
import RichText from '../../components/richText_field/richText_field'
const Layout = dynamic(() => import('../../components/Layout'))
import styles from "./blog-post.module.scss"

const Post = ({ data = {}, config }) => {
    const router = useRouter();
    const post = data?.post;

    if (post == undefined || !router.isFallback && !post.slug) {
      return <ErrorPage statusCode={404} />
    }

    const {tags, author, body, relatedPosts} = post;
    const shareUrl = `https://www.sama.com/${router.asPath}`;
    const postConfig = {
      ...config,
      ...data.post.config
    }
  
    return (
      <Layout config={postConfig}>
        <BlogHeroPost {...post} />
        <section className="umoja-l-grid-section umoja-u-bg--white">
          <div className={`umoja-l-grid--12 ${styles.body}`}>
            <div className={styles.share}>
              <div className={styles.share_track}>
                <a 
                  className={`${styles.share_button} ${styles.share_button__facebook}`}
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}>
                </a>
                <a 
                  className={`${styles.share_button} ${styles.share_button__twitter}`}
                  href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20great%20blog%20post%20I%20just%20read&url=${shareUrl}`}>
                </a>
                <a 
                  className={`${styles.share_button} ${styles.share_button__linkedin}`}
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}&source=https://www.sama.com/&summary=Check%20out%20this%20great%20blog%20post%20I%20just%20read`}
                >
                </a>
              </div>
            </div>
            <RichText className={styles.content} richText={body} align="left" />
          </div>
        </section>
        <BlogPostFooter tags={tags} author={author} />
        {relatedPosts &&
          <section className="umoja-l-grid-section umoja-l-grid-section--flat-top umoja-u-bg--white">
            <div className="umoja-l-grid--12">
              <h3 className={`${styles.relatedPosts}`}>Related Posts:</h3>
              <BlogSmallCardRow posts={relatedPosts} hideTag={tags[0].value} />
            </div>
          </section>
        }
      </Layout>
    )
  }


export async function getStaticProps({ params }) {
    const {post} = await client.fetch(postQuery, {
      slug: params.slug
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