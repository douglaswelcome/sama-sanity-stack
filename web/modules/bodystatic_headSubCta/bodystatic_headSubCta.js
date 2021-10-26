import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button/button'
import styles from './bodystatic-headSubCta.module.scss'

const bodystatic_headSubCta = (props) => {
    const {bigheady, preheadline, headline, subheadline, button} = props;

    return (
        <div className="bodystatic-headSubCta umoja-l-grid--12 umoja-l-grid-gap--row-1">
            {preheadline &&
            <h3 className={styles.preheadline}>{preheadline}</h3>
            }
            {headline &&
            <h2 className={`${styles.headline}${bigheady ? ' display-small' : ''}`}>{headline}</h2>
            }
            {subheadline &&
            <h5 className={styles.subheadline}>{subheadline}</h5>
            }
            {button &&
            <div className={styles.cta}>
                <Button {...button} />
            </div>
            }
        </div>
    )
}

bodystatic_headSubCta.propTypes = {
    bigheady: PropTypes.bool,
    preheadline: PropTypes.string,
    headline: PropTypes.string,
    subheadline: PropTypes.string,
    button: PropTypes.object
}
  
  export default bodystatic_headSubCta