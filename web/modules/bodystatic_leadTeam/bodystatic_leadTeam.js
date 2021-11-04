import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import styles from './bodystatic-leadTeam.module.scss'

const bodystatic_leadTeam = (props) => {
    const {avatars} = props;
    const lead = avatars[0];

    return (
        <div className="bodystatic-leadTeam umoja-l-grid--12">
            <div className={`${styles.row} ${styles.row__top}`}>
                <div className={styles.avatar}>
                    <div className={styles.imageWrap}>
                        <Image src={lead.image} layout="fill" />
                    </div>
                    <h4>{lead.name}</h4>
                    <h5>{lead.title}</h5>
                </div>
            </div>
            <div className={styles.row}>
            {avatars.map((avatar, i) => {
                if(i == 0) return;
                return  (
                    <div className={styles.avatar}>
                        <div className={styles.imageWrap}>
                            <Image src={avatar.image} layout="fill" />
                        </div>
                        <h4>{avatar.name}</h4>
                        <h5>{avatar.title}</h5>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

bodystatic_leadTeam.propTypes = {
    avatars: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.shape({
            name: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.shape({
                asset: PropTypes.shape({url: PropTypes.string})
            })
        })
    }))
}

export default bodystatic_leadTeam;