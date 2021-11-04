import React from 'react'
import PropTypes from 'prop-types'
import styles from './bodystatic-punchyTxt.module.scss'

const bodystatic_punchyTxt = (props) => {
    const {header, subheader} = props;

    return (
        <div className="bodystatic-punchyTxt umoja-l-grid--12 umoja-l-grid-align--center">
            <h2 className={`${styles.header} display-small`}>{header}</h2>
            <div className={`${styles.dividerLine} divider-line`}></div>
            <h5 className={styles.subheader}>{subheader}</h5> 
        </div>
    )
}

bodystatic_punchyTxt.propTypes = {
    header: PropTypes.string,
    subheader: PropTypes.string
}
  
export default bodystatic_punchyTxt