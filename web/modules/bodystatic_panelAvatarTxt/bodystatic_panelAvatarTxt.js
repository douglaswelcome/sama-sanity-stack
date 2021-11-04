import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import DotCanvas from '../../components/dot_canvas'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodystatic-panelAvatarTxt.module.scss'

const bodystatic_panelAvatarTxt = (props) => {
    const {text, header, subheader, image} = props;

    return (
        <div className="bodystatic-panelAvatarTxt umoja-l-grid--12">
            <div className={styles.dotPanel}>
                <DotCanvas />
            </div>
            <div className={styles.bottomPanel}></div>
            <div className={styles.topPanel}>
                <div className={styles.imageWrap}>
                    <Image src={image} layout="fill" objectFit="contain" />
                </div>
                <div className={styles.name}>
                    <h4>{header}</h4>
                    <h5>{subheader}</h5>
                </div>
                <div class="divider-line divider-line--horizontal divider-line--charcoal"></div>
                <div className={styles.body}>
                    <RichText richText={text.richText} align={text.align} />
                </div>
            </div>
        </div>
    )
}

bodystatic_panelAvatarTxt.propTypes ={
    header: PropTypes.string,
    subheader: PropTypes.string,
    text: PropTypes.object,
    image: PropTypes.shape({
        asset: PropTypes.shape({url: PropTypes.string})
    }),
}

export default bodystatic_panelAvatarTxt;