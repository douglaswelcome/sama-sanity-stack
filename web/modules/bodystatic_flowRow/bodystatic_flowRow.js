import React from 'react'
import PropTypes from 'prop-types'
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../client'
import styles from './bodystatic-flowRow.module.scss'

const bodystatic_flowRow = (props) => {
    const {items} = props;


    return (
        <div className="bodystatic-flowRow umoja-l-grid--6">
            {items.map((item, i) => {
                const imageProps = useNextSanityImage(client, item.image);
                let backgroundStyles = {};
                backgroundStyles.backgroundImage = `url(${imageProps.src})`;
                if(item.backgroundSize){
                    backgroundStyles.backgroundSize = `${item.backgroundSize}%`;
                }

                return  (
                    <div key={item._key} className={styles.step}>
                        <div className={styles.image} style={backgroundStyles}>
                            {i < 2 &&
                                <div className={styles.arrow}></div>
                            }
                        </div>
                        <h5>{item.title}</h5>
                    </div>
                )
            })}
        </div>
    )
}

bodystatic_flowRow.propTypes = {
    items: PropTypes.array
}
  
  export default bodystatic_flowRow