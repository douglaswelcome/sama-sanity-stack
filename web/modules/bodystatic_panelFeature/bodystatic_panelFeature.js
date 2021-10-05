import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import Button from '../../components/button/button'
import styles from './bodystatic-panelFeature.module.scss'

const bodystatic_panelFeature = (props) => {
    const {image_position, image, headline, body_text, button, awards} = props;

    return (
        <div className={`bodystatic-panelFeature ${image_position ? styles._flipImage : '' } umoja-l-grid--12 umoja-u-bg--charcoal3`}>
            <div className={styles.imgWrap}>
                <Image src={image} layout="fill" />
            </div>
            <div className={styles.copy}>
                <h2>{headline}</h2>
                <h5>{body_text}</h5>
                {awards &&
                    <div className={styles.awards}>
                        {awards.map((award) => {
                            return <Image src={award} layout="fixed" width={110} height={110} key={award._key} />
                        })}
                    </div>
                }
                {button.link &&
                    <Button {...button} />
                }
            </div>
        </div>
    )
}

bodystatic_panelFeature.propTypes ={
    image_position: PropTypes.bool,
    image: PropTypes.shape({
        asset: PropTypes.shape({url: PropTypes.string})
    }),
    headline: PropTypes.string,
    body_text: PropTypes.string,
    button: PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
        type: PropTypes.string
    }),
    awards: PropTypes.arrayOf(PropTypes.shape({
        asset: PropTypes.shape({url: PropTypes.string})
    }))
}

export default bodystatic_panelFeature;