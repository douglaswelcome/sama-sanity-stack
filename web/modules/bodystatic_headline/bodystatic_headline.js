import React from 'react'
import PropTypes from 'prop-types'
import styles from './bodystatic-headline.module.scss'
import Button from '../../components/button/button'

const bodystatic_headline = (props) => {
    const {preheadline, headline, subheadline, cta} = props;

    return (
        <div className="bodystatic-headline umoja-l-grid--12">
            <div class={styles.inner}>
                <h3 className={styles.__preheadline}>{preheadline}</h3>
                <h2 className={styles.__headline}>{headline}</h2>
                <h5 className={styles.__subheadline}>{subheadline}</h5>
                
                {cta && cta.title && 
                    <Button {...cta} />
                }
                
            </div>
        </div>
    )
}

bodystatic_headline.propTypes = {
    preheadline: PropTypes.string,
    headline: PropTypes.object,
    subheadline: PropTypes.string,
    cta: PropTypes.object
  }
  
  export default bodystatic_headline