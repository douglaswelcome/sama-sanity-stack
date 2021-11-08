import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button/button'
import Image from '../../components/image'
import styles from './bodystatic-iconCopy.module.scss'

const bodystatic_iconCopy = (props) => {
    const {center, responsive, icons} = props;
    let className = `bodystatic-iconCopy umoja-l-grid-align--base ${icons.length > 3 ? `umoja-l-grid--12` : `umoja-l-grid--6 ${styles._three}`}`;

    if(center){
        className += ` ${styles._center}`;
    }
    if(responsive){
        className += ` ${styles._responsive}`;
    }

    return (
        <div className={className}>
            {icons.map((icon) => {
                return ( 
                <div className={styles.icon} key={icon._key}>
                    {icon.icon && 
                    <div className={styles.iconWrap}>
                        {responsive ?
                                <Image layout="fill" objectFit="contain" src={icon.icon} />
                            :
                                <Image layout="fixed" src={icon.icon} height={48} width={48} />
                        }
                    </div>
                    }
                    <h4>{icon.title}</h4>
                    {/* <p>{icon.body}</p> */}
                </div>
                )
            })}
        </div>
    )
}

bodystatic_iconCopy.propTypes = {
    center: PropTypes.bool,
    responsive: PropTypes.bool,
    icons: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.shape({
            title: PropTypes.string,
            // body: PropTypes.array,
            icon: PropTypes.shape({
                asset: PropTypes.shape({url: PropTypes.string})
            })
        })
    }))
}

export default bodystatic_iconCopy;