import React from 'react'
import PropTypes from 'prop-types'
import RichText from '../../components/richText_field/richText_field'
import Button from '../../components/button/button'
import styles from './hero-centertxt.module.scss'

const hero_centertxt= (props) => {
    const {heading, tagline, cta} = props;

    return (
        <div className="hero-centertxt umoja-l-grid--12">
            <div className={styles.body}>
                    <h1>{heading}</h1>
                    {tagline &&
                        tagline.richText ?
                            <RichText className={styles.tagline} richText={tagline.richText} align={tagline.align} />
                        :
                            <h5>{tagline}</h5>
                    } 
                {cta && cta.title && 
                    <Button {...cta} />
                }
            </div>
        </div>
    )
}

hero_centertxt.propTypes = {
    heading: PropTypes.string,
    tagline: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    cta: PropTypes.object
}
  
  export default hero_centertxt