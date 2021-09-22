import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import styles from './bodystatic-bragBar.module.scss'

const bodystatic_bragBar = (props) => {
    const {logos, align_left} = props;
    
    return (
        <div className={`${align_left ? styles.__left : 'bodystatic-bragBar'} umoja-l-grid--12 umoja-l-grid-gap--row-1`}>
            <div className={styles.logoRow}>
                <div className={styles.logos}>
                    {logos.map((logo) => {
                        return (
                            <div className={styles.logo} key={logo._key}>
                                <Image src={logo} height={70} width={128} />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

bodystatic_bragBar.propTypes = {
    align_left: PropTypes.bool,
    logos: PropTypes.array
}

export default bodystatic_bragBar;