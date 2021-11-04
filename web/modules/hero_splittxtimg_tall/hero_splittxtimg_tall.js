import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import Button from '../../components/button/button'
import styles from './hero-splittxtimg-tall.module.scss'

const hero_splittxtimg_tall = (props) => {
    const {preheadline, heading, image, tagline, ctas} = props;

    return (
        <div className="hero-splittxtimg-tall umoja-l-grid--12 umoja-l-grid-align--center">
            <div className={styles.copyWrapper}>
                <div className={styles.copy}>
                    {preheadline &&
                        <h3 className={styles.preheadline}>{preheadline}</h3>
                    }
                    <h1>{heading}</h1>
                    {tagline &&
                        <h5>{tagline}</h5>
                    }
                    <div className={styles.buttonRow}>
                        {ctas.map((cta) => {
                            return <Button key={cta._key} {...cta} />
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.imageColumn}>
                <div className={styles.imageGradient}></div>
                <div className={styles.imageWrapper}>
                    <Image src={image} layout="responsive"  objectFit="cover"/>
                </div>
            </div>
        </div>
    )
}

hero_splittxtimg_tall.propTypes = {
    preheadline: PropTypes.string,
    heading: PropTypes.string,
    image: PropTypes.object,
    tagline: PropTypes.string,
    ctas: PropTypes.array
}
  
  export default hero_splittxtimg_tall