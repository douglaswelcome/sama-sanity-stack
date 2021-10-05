import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button/button'
import styles from './bodystatic-splitTxtBtn.module.scss'

const bodystatic_splitTxtBtn  = (props) => {
    const {headline, body, buttons} = props;

    return (
        <div className="bodystatic-splitTxtBtn umoja-l-grid--12">
            <div className={styles.left}>
                <h2>{headline}</h2>
                <p>{body}</p>
            </div>
            <div className={styles.right}>
                <div className={styles.buttons}>
                    {buttons.map((button) => {
                        return ( 
                            <Button {...button} key={button._key} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

bodystatic_splitTxtBtn.propTypes = {
    headline: PropTypes.string,
    body: PropTypes.string,
    buttons: PropTypes.array
}

export default bodystatic_splitTxtBtn;