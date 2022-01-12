import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Page404 from '../../404'
import client from '../../../client'
import { postsByTagQuery, getPostsByTagSlug, getAllPostSlugs } from '../../../libs/queries'
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('../../../components/Layout'));
import Button from '../../../components/button/button';
import BlogPost from '../../../components/blog/blog_postCard/blog_postCard';
import styles from './blog-tag.module.scss'

const PostTag = ({ data = {}, config }) => {
    const router = useRouter();
    const {pageConfig} = data;
    const tagConfig = {
      ...config,
      ...pageConfig
    }

    if (data?.firstLoad == undefined || !router.isFallback && !data.slug) {
      return (
        <Layout config={tagConfig}>
          <Page404 />
        </Layout>
      )
    }else{
      const {tagName, firstLoad, morePosts} = data;
      const [posts, setPostList] = useState(firstLoad);

      const loadMorePosts = () => {
        const newPosts = posts.concat(morePosts.splice(0, 12));
        setPostList(newPosts)
      }

      return (
        <Layout config={tagConfig}>
          <section className="umoja-l-grid-section umoja-u-bg--white">
            <div className="umoja-l-grid--12">
              <div className={styles.name}>
                <h1>{tagName}</h1>
              </div>
            </div>
          </section>
          <section className="umoja-l-grid-section umoja-u-bg--white">
            <div className="umoja-l-grid--12 umoja-l-grid-gap--row-1">
                {posts.map((post, i) => {
                    return <BlogPost {...post} hideTag={true} key={i} />
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
    const tag = await getPostsByTagSlug(params.slug);
    let data = {
      pageConfig:{
        title: '404: Page not found'
      }
    }

    if(tag){
      const posts = await client.fetch(postsByTagQuery, {
        tag: tag?.tag,
      })
      data = {
        firstLoad: posts.firstLoad,
        morePosts: posts.morePosts,
        slug: params.slug,
        tagName: tag.tag,
        pageConfig:{
          title: "Sama Blog | Training Data, AI and Impact Sourcing Insights",
          description: "From machine learning to training data strategy, the Sama blog covers research, news and other AI trends from thought leaders across the globe."
        }
      }
    }
  
    return {
      props: {
        data
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