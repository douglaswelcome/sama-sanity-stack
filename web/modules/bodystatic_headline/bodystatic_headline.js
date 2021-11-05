import React from 'react'
import PropTypes from 'prop-types'
import styles from './bodystatic-headline.module.scss'

const bodystatic_display = (props) => {
    const {text} = props;

    return (

        <div className="bodystatic-headline umoja-l-grid--12">
            <div class={styles.inner}>
            <h2 class={styles.__headline}>Here's a headline</h2>
            <h5 class={styles.__subheadline}>Here's a subheadline</h5>
            <div class={styles.__btn}>
                <div class="btn__row">
                     <a href="{{module.url}}" class="btn__wrapper "
                      <button class="btn">
                          <h3 class="btn__text"></h3>
                      </button>
                    </a>
                </div>
             </div>
    </div>
    )
}

bodystatic_headline.propTypes = {
    text: PropTypes.string
}
  
  export default bodystatic_headline