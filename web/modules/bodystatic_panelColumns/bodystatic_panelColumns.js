import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodystatic-panelColumns.module.scss'

const bodystatic_panelColumns = (props) => {
    const {panels} = props;

    return (
        <div className="bodystatic-panelColumns umoja-l-grid--12">
            {panels.map((panel) => {
                return  (
                    <div className={styles.panel}>
                        <div className={styles.panel_imgWrap}>
                            <Image src={panel.image} layout="responsive" objectFit="cover" />
                        </div> 
                        <div className={styles.panel_copy}>
                            <h4>{panel.header}</h4>
                            <RichText richText={panel.body.richText} align={panel.body.align} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

bodystatic_panelColumns.propTypes ={
    panels: PropTypes.array
}

export default bodystatic_panelColumns;