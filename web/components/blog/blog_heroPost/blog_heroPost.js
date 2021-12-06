import PropTypes from 'prop-types'
import Image from '../../image'
import Link from '../../link'
import styles from './blog-hero-post.module.scss'

const BlogHeroPost = (props) => {
    const {_createdAt, author, featured_image, title, estimatedReadingTime} = props;
    const authorSlug = {
        internalLink_custom: `blog/author/${author.slug.current}`
    }
    let date = new Date(_createdAt);
    date = date.toLocaleString('en-US', {
        day: 'numeric',
        year: 'numeric',
        month: 'long'
    });

    return(
        <section className="umoja-l-grid-section umoja-u-bg--white">
            <div className="umoja-l-grid--12 umoja-l-grid-align--center">
                <div className={styles.wrap}>
                    <div className={styles.left}>
                        <h1>{title}</h1>
                        <Link 
                            link={authorSlug}
                            className={styles.author}
                        >
                            {author.name}
                        </Link>
                        <p className={styles.date}>{date} | {`${estimatedReadingTime} Min Read`}</p>
                    </div>
                    <div className={styles.right}>
                        <Image layout="fill" objectFit="cover" src={featured_image} />
                    </div>
                </div>
            </div>
        </section>
    )
}

BlogHeroPost.propTypes ={
    _createdAt: PropTypes.string,
    slug: PropTypes.object,
    author: PropTypes.object,
    featured_image: PropTypes.object,
    tags: PropTypes.array,
    title: PropTypes.string,
    estimatedReadingTime: PropTypes.number
}

export default BlogHeroPost