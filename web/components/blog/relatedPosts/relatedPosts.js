import PropTypes from 'prop-types'
import Image from '../../image'
import Link from '../../link'
import slugify from '../../../libs/slugify'
import styles from './related-posts.module.scss'

const RelatedPosts = (props) => {
    const {posts} = props;

    return(
        <section className="umoja-l-grid-section umoja-l-grid-section--flat-top umoja-u-bg--white">
            <div className="umoja-l-grid--12">
                <h3 className={`${styles.intro}`}>Related Posts:</h3>
                {posts.map((post) => {
                    const tag = post.tags[1];
                    const slugURL = post.slug ? post.slug.current : '';
                    let postSlug = {
                        internalLink_custom: `blog${slugURL.charAt(0) == '/' ? slugURL : `/${slugURL}`}`
                    }
                    let tagSlug = {};
                    if(tag){
                        tagSlug = {
                            internalLink_custom: `blog/tag/${slugify(tag.value)}`
                        }
                    }
                    return  (
                        <div className={styles.post} key={post._id}>
                            <Link 
                                link={postSlug}
                                className={styles.imgWrap}
                            >
                                <Image src={post.featured_image} layout="fill" objectFit="cover" />
                            </Link>
                            <div className={styles.post_info}>
                                <Link 
                                    link={postSlug}
                                >
                                    <h4>{post.title}</h4>
                                </Link>
                                {tag &&
                                    <Link 
                                        className={styles.tag} 
                                        link={tagSlug}
                                    >
                                        {tag.label}
                                    </Link>
                                }
                            </div>  
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

RelatedPosts.propTypes ={
    posts: PropTypes.array.isRequired,
}

export default RelatedPosts