import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './header.module.scss'

const NavLink = (props) => {
    const {url, title} = props;
    const { asPath } = useRouter();
    const currentSlug = asPath.charAt(0) == '/' ? asPath.substring(1) : asPath;

    if(url.internalLink || url.internalLink_custom){
        let slug = (url.internalLink ? url.internalLink.slug.current : url.internalLink_custom);
        slug = slug.charAt(0) == '/' ? slug.substring(1) : slug;
        const active = currentSlug === slug ? true : false;
        const className = active ? `${styles.navLink} ${styles.navLink__active}` : `${styles.navLink}`;

        return (
            <Link 
                href={`/${slug}`}
            >
                <a className={className}>{title}</a>
            </Link>
        )
    }

    return (
        <a 
            href={url.externalUrl}
            className={styles.navLink}
            target="_blank"
        >
            {title}
        </a>
    )
}

NavLink.propTypes = {
    title: PropTypes.string,
    url: PropTypes.object
}

export default NavLink;