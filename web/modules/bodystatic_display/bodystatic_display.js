import React from 'react'
import PropTypes from 'prop-types'
import styles from './bodystatic-display.module.scss'

const bodystatic_display = (props) => {
    const {text} = props;

    return (
        <div className="bodystatic-display umoja-l-grid--12">
            <div class={styles.inner}>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

bodystatic_display.propTypes = {
    text: PropTypes.string
}
  
  export default bodystatic_display