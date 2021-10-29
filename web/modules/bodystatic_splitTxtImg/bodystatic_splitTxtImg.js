import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button/button'
import Image from '../../components/image'
import styles from './bodystatic-splitTxtImg.module.scss'

const bodystatic_splitTxtImg  = (props) => {
    const {img_position, theme_color, img_frame, heading, subheading, body, cta, image} = props;
    const className = `bodystatic-splitTxtImg umoja-l-grid--6 ${theme_color ? styles[`_${theme_color}`] : ''}`;
    const txtColClass = `${styles.copy} ${img_position == 'left' ? styles._right : styles._left}`;
    const imgColClass = `${styles.image} ${img_position == 'left' ? styles._left: styles._right} ${img_frame ? styles._frame : ''}`;

    return (
        <div className={className}>
            <div className={txtColClass}>
                {subheading &&
                    <h3 className={styles.subheading}>{subheading}</h3>
                }
                <h2>{heading}</h2>
                <p>{body}</p>
                {cta.link &&
                    <Button {...cta} />
                }
            </div>
            <div className={imgColClass}>
                <div className={styles.imgWrap}>
                    {image &&
                        <Image src={image} layout="responsive" objectFit="cover" />
                    }
                </div>
            </div>
        </div>
    )
}

bodystatic_splitTxtImg.propTypes = {
    img_position: PropTypes.string,
    theme_color: PropTypes.string,
    img_frame: PropTypes.bool,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    body: PropTypes.string,
    cta: PropTypes.object,
    image: PropTypes.object
}

export default bodystatic_splitTxtImg;