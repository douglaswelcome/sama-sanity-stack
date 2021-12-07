import PropTypes from 'prop-types'
import Image from '../../image'
import Link from '../../link'
import slugify from '../../../libs/slugify'
import styles from './blog-smallCard-row.module.scss'

const BlogSmallCardRow = (props) => {
    const {posts, hideTag} = props;

    return(
            <>
            {posts.map((post) => {
                let tag = post.tags[1];
                if(hideTag && tag.value == hideTag){
                    tag  = post.tags.find((o, i) => {
                        if (o.value !== hideTag) {
                            return o;
                        }
                    });
                }
                
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
            </>
    )
}

BlogSmallCardRow.propTypes ={
    posts: PropTypes.array.isRequired,
    hideTag: PropTypes.string
}

export default BlogSmallCardRow