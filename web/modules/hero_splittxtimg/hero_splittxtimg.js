import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import Button from '../../components/button/button'
import styles from './hero-splittxtimg.module.scss'

const hero_splittxtimg = (props) => {
    const {page_title, heading, image, tagline, cta} = props;

    return (
        <div className="hero-splittxtimg umoja-l-grid--12 umoja-l-grid-align--center">
            <div className={styles.copy}>
                {page_title &&
                    <p className={styles.pageTitle}></p>
                }
                <h1>{heading}</h1>
                {tagline &&
                    <h5>{tagline}</h5>
                }
                {cta &&
                    <Button {...cta} />
                }
            </div>
            <div className={styles.imgWrapper}>
                <Image src={image} layout="responsive" sizes="(max-width: 500px) 100vh, 500px" />
            </div>
        </div>
    )
}

hero_splittxtimg.propTypes = {
    page_title: PropTypes.bool,
    heading: PropTypes.string,
    image: PropTypes.object,
    tagline: PropTypes.string,
    cta: PropTypes.object
}
  
  export default hero_splittxtimg