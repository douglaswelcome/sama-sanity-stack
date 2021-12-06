import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import client from '../../../client'
import { authorQuery, authorPostsQuery } from '../../../libs/queries'
import dynamic from "next/dynamic";
import Image from '../../../components/image';
import BlogPost from '../../../components/blog/blog_postCard/blog_postCard';
const Layout = dynamic(() => import('../../../components/Layout'))
import styles from './blog-author.module.scss'

const PostAuthor = ({ data = {}, config }) => {
    const router = useRouter();
    const author = data?.author;

    if (author == undefined || !router.isFallback && !author.slug) {
      return <ErrorPage statusCode={404} />
    }

    const {avatar, name, bio, posts} = author; 
    const firstPosts = posts.slice(0, 12);

    return (
      <Layout config={config}>
        <section className="umoja-l-grid-section umoja-u-bg--white">
          <div className="umoja-l-grid--12">
            <div className={styles.headshot}>
              <Image layout="responsive" objectFit="cover" src={avatar} />
            </div>
            <div className={styles.copy}>
              <p className={styles.intro}>Words by:</p>
              <h1>{name}</h1>
              <p className={styles.bio}>{bio}</p>
            </div>
          </div>
        </section>
        <section className="umoja-l-grid-section umoja-u-bg--white">
          <div className="umoja-l-grid--12 umoja-l-grid-gap--row-1">
              {firstPosts.map((post, i) => {
                  return <BlogPost {...post} hideAuthor={true} key={i} />
              })}
          </div>
        </section>
      </Layout>
    )
}

export async function getStaticProps({ params }) {
    const {author} = await client.fetch(authorQuery, {
      slug: params.slug,
    })
  
    return {
      props: {
        data: {
          author
        },
      },
    }
  }
  
export async function getStaticPaths() {
    const paths = await client.fetch(authorPostsQuery);
  
    return {
      paths: paths.map((slug) => ({ params: { slug } })),
      fallback: true,
    }
}

export default PostAuthor