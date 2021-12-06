import PropTypes from 'prop-types'
import Image from '../../image'
import Link from '../../link';
import slugify from '../../../libs/slugify'
import styles from './blog-post.module.scss'

const BlogPost = (props) => {
    const {_createdAt, slug, author, featured_image, tags, title, estimatedReadingTime, hideAuthor, hideTag} = props;
    const tag = tags[0].label;
    const slugURL = slug ? slug.current : '';
    let authorSlug = {};
    let tagSlug = {};
    let postSlug = {
        internalLink_custom: `blog${slugURL.charAt(0) == '/' ? slugURL : `/${slugURL}`}`
    }
    if(!hideAuthor){
        authorSlug = {
            internalLink_custom: `blog/author/${author.slug ? author.slug.current : ''}`
        }
    }
    if(!hideTag){
        tagSlug = {
            internalLink_custom: `blog/tag/${slugify(tag)}`
        }
    }
    let date = new Date(_createdAt);
    date = date.toLocaleString('en-US', {
        day: 'numeric',
        year: 'numeric',
        month: 'long'
    });

    return(
        <div className={styles.postCard}>
            <Link 
                link={postSlug}
                className={styles.postCard_image}
            >
                <Image layout="fill" objectFit="cover" src={featured_image} />
            </Link>
            <div className={styles.postCard_data}>
                {!hideTag &&
                    <Link
                        className={styles.postCard_tag}
                        link={tagSlug}
                    >
                        {tag}
                    </Link>
                }
                <Link link={postSlug}>
                    <h3>{title}</h3>
                </Link>
                {!hideAuthor &&
                    <Link
                        link={authorSlug}
                        className={styles.postCard_author}
                    >
                        {author.name}
                    </Link>
                } 
                <p className={`${styles.postCard_date} ${hideAuthor ? styles.postCard_date__noAuthor : ''}`}>{date}{estimatedReadingTime ? ` | ${estimatedReadingTime} Min Read` : ''}</p>
            </div>
        </div>
    )
}

BlogPost.propTypes ={
    _createdAt: PropTypes.string,
    slug: PropTypes.object,
    author: PropTypes.object,
    featured_image: PropTypes.object,
    tags: PropTypes.array,
    title: PropTypes.string,
    estimatedReadingTime: PropTypes.number,
    hideAuthor: PropTypes.bool,
    hideTag: PropTypes.bool
}

export default BlogPost