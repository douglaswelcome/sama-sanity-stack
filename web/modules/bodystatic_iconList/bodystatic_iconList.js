import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import styles from './bodystatic-iconList.module.scss'

const bodystatic_iconList = (props) => {
    const {icons} = props;
    let className = `bodystatic-iconList umoja-l-grid-align--base ${icons.length > 3 ? `umoja-l-grid--12` : `umoja-l-grid--6 ${styles._three}`}`;


    return (
        <div className={className}>
            {icons.map((icon) => {
                return ( 
                <div className={styles.icon} key={icon._key}>
                    {icon.icon && 
                    <div className={styles.iconWrap}>
                        <Image layout="fixed" src={icon.icon} height={48} width={48} />
                    </div>
                    }
                    {icon.title &&
                    <h5>{icon.title}</h5>
                    }
                    {icon.body &&
                    <p>{icon.body}</p>
                    }
                </div>
                )
            })}
        </div>
    )
}

bodystatic_iconList.propTypes = {
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

export default bodystatic_iconList;