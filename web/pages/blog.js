import React, {useState} from 'react'
import client from '../client'
import {postsQuery} from '../libs/queries'
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('../components/Layout'));
import Button from '../components/button/button';
import BlogHeroHome from '../components/blog/blog_heroHome/blog_heroHome';
import BlogPost from '../components/blog/blog_postCard/blog_postCard';
import BlogSmallCardRow from '../components/blog/blog_smallCard_row/blog_smallCard_row';

const Blog = (props) => {
    let {topPost, firstLoad, featuredPosts, morePosts, config} = props;
    const [posts, setPostList] = useState(firstLoad);

    const loadMorePosts = () => {
        const newPosts = posts.concat(morePosts.splice(0, 12));
        setPostList(newPosts)
    } 

    return (
        <Layout config={config}>
            <BlogHeroHome {...topPost} />
            <section className="umoja-l-grid-section umoja-u-bg--charcoal1">
                <div className="umoja-l-grid--12">
                    <div className="umoja-l-grid-span--full">
                        <h2>Featured Posts</h2>
                        <p>See some of our recent posts and exciting news:</p>
                    </div>
                    <BlogSmallCardRow posts={featuredPosts} hideTag="Featured" />
                </div>
            </section>
             <section className="umoja-l-grid-section umoja-u-bg--white">
                <div className="umoja-l-grid--12 umoja-l-grid-gap--row-1">
                    {posts.map((post, i) => {
                        return <BlogPost {...post} key={i} />
                    })}
                </div>
             </section>
             <section className="umoja-l-grid-section umoja-l-grid-section--flat-top umoja-u-bg--white">
                <Button 
                    type="secondary" 
                    title="Load More"
                    onClick={loadMorePosts}
                />
             </section>
        </Layout>
    )

}

export async function getStaticProps() {
    const posts = await client.fetch(postsQuery);
    return {
        props: {
            topPost: posts.topPost,
            firstLoad: posts.firstLoad,
            featuredPosts: posts.featuredPosts,
            morePosts: posts.morePosts
        },
    }
}

export default Blog;
