import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import Link from 'next/link'
import styles from './button.module.scss'

const Button = (props) => {
    const {title, type, size, link} = props;
    const [buttonLink, setButtonLink] = useState(link);

    useEffect(() => {
        if(link && link.internalLink){
            client.fetch(`*[_type == "page" && _id == "${link.internalLink._ref}"][0]`)
            .then(page => {
                setButtonLink(page.slug.current);
            })
        }
    });

    const wrapperClass = `${styles.wrapper} ${type ? styles[`_${type}`] : ''} ${size ? styles[`_${size}`] : ''}`;
    const buttonInner =  <button className={styles.btn}>
                            <h3 className={styles.text}>{title}</h3>
                        </button>

    if(buttonLink){
        return (
            <>
                {buttonLink.externalUrl ?
                    <a 
                        href={buttonLink.externalUrl}
                        className={wrapperClass}
                        target="_blank"
                        rel="noopener"
                    >
                        {buttonInner}
                    </a>
                    :
                    <Link
                        href={{
                            pathname: '/',
                            query: {slug: buttonLink}
                        }}
                        as={`/${buttonLink}`}
                    >
                        <a className={wrapperClass}>
                            {buttonInner}
                        </a>
                    </Link>
                }
            </>
        )
    }else{
        <div className={wrapperClass}>
            {buttonInner}
        </div>
    }
}

Button.propTypes ={
    link: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    title: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string
}

export default Button