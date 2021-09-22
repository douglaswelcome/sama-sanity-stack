import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import styles from './bodystatic-iconCopy.module.scss'

const bodystatic_iconCopy = (props) => {
    const {icons} = props;

    return (
        <div className='bodystatic-iconCopy umoja-l-grid--12 umoja-l-grid-align--base'>
            {icons.map((icon) => {
                return ( 
                <div className={styles.icon} key={icon._key}>
                    <Image src={icon.icon} height={48} width={48} />
                    <h5>{icon.title}</h5>
                    <p>{icon.body}</p>
                </div>
                )
            })}
        </div>
    )
}

bodystatic_iconCopy.propTypes = {
    icons: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string,
            icon: PropTypes.shape({
                asset: PropTypes.shape({url: PropTypes.string})
            })
        })
    }))
}

export default bodystatic_iconCopy;