import React from 'react'
import PropTypes from 'prop-types'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodystatic-centerPanel.module.scss'

const bodystatic_centerPanel = (props) => {
    const {body_copy, heading} = props;

    return (
        <div className="bodystatic-centerPanel umoja-l-grid--12">
            <div className={styles.panel}>
                <h2>{heading}</h2>
                <RichText richText={body_copy.richText} align={body_copy.align} />
            </div>
        </div>
    )
}

bodystatic_centerPanel.propTypes = {
    heading: PropTypes.string,
    body_copy: PropTypes.object
}
  
  export default bodystatic_centerPanel