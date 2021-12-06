import PropTypes from 'prop-types'
import Image from '../../image'
import Link from '../../link'
import styles from './blog-heroHome.module.scss'
import slugify from '../../../libs/slugify'

const BlogHeroHome = (props) => {
    const {_createdAt, slug, author, featured_image, tags, title, plaintextBody, estimatedReadingTime} = props;
    const tag = tags[0].label;
    const excerpt = (plaintextBody.length <= 200 ? plaintextBody : plaintextBody.substr(0, plaintextBody.lastIndexOf(' ', 200)));
    let postSlug = {
        internalLink_custom: `/blog${slug.current.charAt(0) == '/' ? slug.current : `/${slug.current}`}`
    }
    const authorSlug = {
        internalLink_custom: `/blog/author/${author.slug.current}`
    }
    const tagSlug = {
        internalLink_custom: `/blog/tag/${slugify(tag)}`
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
                <div className={styles.left}>
                    <Link link={postSlug}>
                        <Image layout="responsive" objectFit="cover" src={featured_image} />
                    </Link>
                </div>
                <div className={styles.right}>
                    <Link
                        link={tagSlug}
                        className={styles.tag}
                    >
                        {tag}
                    </Link>
                    <Link link={postSlug}>
                        <h1>{title}</h1>
                    </Link>
                    <p className={styles.excerpt}>{`${excerpt}...`}</p>
                    <Link 
                        link={authorSlug}
                        className={styles.author}
                    >
                        {author.name}
                    </Link>
                    <p className={styles.date}>{date} | {`${estimatedReadingTime} Min Read`}</p>
                </div>
            </div>
        </section>
    )
}

BlogHeroHome.propTypes ={
    _createdAt: PropTypes.string,
    slug: PropTypes.object,
    author: PropTypes.object,
    featured_image: PropTypes.object,
    tags: PropTypes.array,
    title: PropTypes.string,
    estimatedReadingTime: PropTypes.number
}

export default BlogHeroHome