import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import DotCanvas from '../../components/dot_canvas'
import styles from './hero-home.module.scss'

const hero_home = (props) => {
  const {heading, image, tagline, cta} = props

  return (
    <div className="hero-home umoja-l-grid--12">
        <div className={styles.dots}>
          <DotCanvas />
        </div>
        <div className={styles.copy}>
            <h1 className="display-small">{heading}</h1>
            <div className="divider-line divider-line--horizontal divider-line--negative"></div>
            <h2 className={styles.subheadline}>{tagline}</h2>
            {cta &&
              <div className="btn_row">
                <div className="btn_wrapper">
                  <a className="btn" href={cta.link}>
                    <h3 className="btn_text">{cta.title}</h3>
                  </a>
                </div>
              </div>
            }
        </div>
        {image &&
          <div className={styles.img}>
            <div className={styles.imgWrapper}>
              <Image src={image} layout="responsive" sizes="(max-width: 800px) 100vh, 800px" />
            </div>
          </div>
        }
    </div>
  )
}

hero_home.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.object,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default hero_home
