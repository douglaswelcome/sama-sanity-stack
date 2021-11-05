import React from 'react'
import PropTypes from 'prop-types'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodystatic-flowCompare.module.scss'

const bodystatic_flowCompare = (props) => {
    const {item1_title, item1_content, item2_title, item2_content, con_pretitle, con_title, con_content} = props;

    return (
        <div className="bodystatic-flowCompare">
           <div className={`${styles.row} umoja-l-grid--12`}>
                <div className={styles.item}>
                    {item1_title &&
                        <h3>{item1_title }</h3>
                    }
                    <RichText className={styles.itemContent} richText={item1_content.richText} align={item1_content.align} />
                </div>
                <div className={`${styles.gradient} ${styles.gradient__topRight}`}></div>
            </div>
            <div className={`${styles.row} ${styles.vs} umoja-l-grid--12`}>
                <div className={`${styles.gradient} ${styles.gradient__topLeft}`}></div>
                <div className={styles.vs_circle}>VS</div>
                <div className={`${styles.gradient} ${styles.gradient__bottomRight}`}></div>
            </div>
            <div className={`${styles.row} umoja-l-grid--12`}>
                <div className={`${styles.gradient} ${styles.gradient__bottomLeft}`}></div>
                <div className={`${styles.item} ${styles.item__right}`}>
                    {item2_title &&
                        <h3>{item2_title }</h3>
                    }
                    <RichText className={styles.itemContent} richText={item2_content.richText} align={item2_content.align} />
                </div>
            </div>
            <div className={`${styles.row} ${styles.vs} ${styles.arrow} umoja-l-grid--12`}>
                <div className={`${styles.gradient} ${styles.gradient__topLeft}`}></div>
                <div className={styles.vs_circle}>VS</div>
                <div className={`${styles.gradient} ${styles.gradient__bottomRight}`}></div>
            </div>
            <div className={`${styles.row} umoja-l-grid--12`}>
                <div className={styles.conclusion}>
                    {con_pretitle &&
                        <h4>{con_pretitle}</h4>
                    }
                    {con_title &&
                        <h3>{con_title}</h3>
                    }
                    <RichText className={styles.itemContent} richText={con_content.richText} align={con_content.align} />
                </div>
            </div>
        </div>
    )
}

bodystatic_flowCompare.propTypes = {
    item1_title: PropTypes.string,
    item1_content: PropTypes.object,
    item2_title: PropTypes.string,
    item2_content: PropTypes.object,
    con_pretitle: PropTypes.string,
    con_title: PropTypes.string,
    con_content: PropTypes.object
}
  
  export default bodystatic_flowCompare