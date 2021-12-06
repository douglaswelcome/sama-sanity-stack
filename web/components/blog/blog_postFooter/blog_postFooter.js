import PropTypes from 'prop-types'
import Image from '../../image'
import Link from '../../link'
import slugify from '../../../libs/slugify'
import styles from './blog-post-footer.module.scss'

const BlogPostFooter = (props) => {
    const {author, tags} = props;
    const  authorSlug = {
        internalLink_custom: `blog/author/${author.slug ? author.slug.current : ''}`
    }

    return(
        <>
        <section className="umoja-l-grid-section umoja-u-bg--white">
            <div className="umoja-l-grid--12">
                <div className={styles.tags}>
                    <h3 className={styles.intro}>Filed Under:</h3>
                    {tags.map((tag,i) => {
                        const tagSlug = {
                            internalLink_custom: `blog/tag/${slugify(tag.value)}`
                        }
                        return <Link 
                                    className={styles.tag} 
                                    key={i}
                                    link={tagSlug}
                                >
                                    {tag.label}
                                </Link>
                    })}
                </div>
                <div className={styles.author}>
                    <h3 className={styles.intro}>Words by:</h3>
                    <div className={styles.author_inner}>
                        <div className={styles.author_headshot}>
                            <Image layout="responsive" objectFit="cover" src={author.avatar} />
                        </div>
                        <div className={styles.author_bio}>
                            <Link link={authorSlug}>
                                <h4>{author.name}</h4>
                            </Link>
                            <p>{author.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="umoja-l-grid-section umoja-u-bg--white">
            <div className="umoja-l-grid--12">
                <h3 className={`${styles.intro} ${styles.relatedPosts_header}`}>Related Posts:</h3>
                <div className={`umoja-l-grid--12 ${styles.posts}`}>
                    
                </div>
            </div>
        </section>
        </>
    )
}

BlogPostFooter.propTypes ={
    author: PropTypes.object,
    tags: PropTypes.array,
}

export default BlogPostFooter