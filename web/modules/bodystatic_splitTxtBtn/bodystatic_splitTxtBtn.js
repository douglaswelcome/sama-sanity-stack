import React from 'react'
import PropTypes from 'prop-types'
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
                <div className="btn_row">
                    {buttons.map((button) => {
                        return (
                            <a className="btn_wrapper" href={button.link} key={button._key}>
                                <button className={`btn ${button.type ? `btn__${button.type}` : ''}`}>
                                    <h3 className="btn_text">{button.title}</h3>
                                </button>
                            </a>
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
    buttons: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
        type: PropTypes.string
    }))
}

export default bodystatic_splitTxtBtn;