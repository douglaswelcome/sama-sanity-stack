import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Page404 from '../../404'
import client from '../../../client'
import { authorQuery, authorPostsQuery } from '../../../libs/queries'
import dynamic from "next/dynamic";
import Button from '../../../components/button/button';
import Image from '../../../components/image';
import BlogPost from '../../../components/blog/blog_postCard/blog_postCard';
const Layout = dynamic(() => import('../../../components/Layout'))
import styles from './blog-author.module.scss'

const PostAuthor = ({ data = {}, config }) => {
    const router = useRouter();
    const author = data?.author;
    const authorConfig = {
      ...config,
      ...data.pageConfig
    } 

    if (author == undefined || !router.isFallback && !author.slug) {
      return (
        <Layout config={authorConfig}>
          <Page404 />
        </Layout>
      )
    }else{
      const {avatar, name, bio, firstLoad, morePosts} = author; 
      const [posts, setPostList] = useState(firstLoad);
      const loadMorePosts = () => {
        const newPosts = posts.concat(morePosts.splice(0, 12));
        setPostList(newPosts)
      } 
  
      return (
        <Layout config={authorConfig}>
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
                {posts.map((post, i) => {
                    return <BlogPost {...post} hideAuthor={true} key={i} />
                })}
            </div>
          </section>
          {morePosts.length > 0 &&
            <section className="umoja-l-grid-section umoja-l-grid-section--flat-top umoja-u-bg--white">
              <Button 
                  type="light" 
                  title="Load More"
                  onClick={loadMorePosts}
              />
            </section>
          }
        </Layout>
      )
    }
}

export async function getStaticProps({ params }) {
    const {author} = await client.fetch(authorQuery, {
      slug: params.slug,
    })
  
    return {
      props: {
        data: {
          author,
          pageConfig:{
            title: author ? "Sama Blog | Training Data, AI and Impact Sourcing Insights" : "404: Page not found",
            description: "From machine learning to training data strategy, the Sama blog covers research, news and other AI trends from thought leaders across the globe."
          }
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