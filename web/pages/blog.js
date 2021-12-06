import React from 'react'
import client from '../client'
import {postsQuery} from '../libs/queries'
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('../components/Layout'));
import BlogHeroHome from '../components/blog/blog_heroHome/blog_heroHome';
import BlogPost from '../components/blog/blog_postCard/blog_postCard';

const Blog = (props) => {
    const {posts, config} = props;
    const topPost = posts[0];
    const firstPosts = posts.slice(1, 13);

    return (
        <Layout config={config}>
            <BlogHeroHome {...topPost} />
             <section className="umoja-l-grid-section umoja-u-bg--white">
                <div className="umoja-l-grid--12 umoja-l-grid-gap--row-1">
                    {firstPosts.map((post, i) => {
                        return <BlogPost {...post} key={i} />
                    })}
                </div>
             </section>
        </Layout>
    )

}

export async function getStaticProps() {
    const posts = await client.fetch(postsQuery);
    return {
        props: {
          posts: posts
        },
    }
}

export default Blog;
