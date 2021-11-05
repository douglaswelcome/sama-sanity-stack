import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodystatic-cardImg.module.scss'

const bodystatic_cardImg = (props) => {
    const {full_width, cards} = props;
    return (
        <div className={`bodystatic_cardImg ${full_width ? styles._fullImages : ''} umoja-l-grid--12`}>
            {cards.map((card, i) => {
                return ( 
                    <div className={`${styles.card} ${cards.length > 3 ? styles._four : ''}`} key={card._key}>
                        {card.icon &&
                            <div className={styles.imageWrap}>
                                {full_width ?
                                    <Image layout="fill" src={card.icon} />
                                :
                                    <Image layout="fixed" src={card.icon} height={48} width={48} />
                                }
                            </div>
                        }
                        <h5>{card.title}</h5>
                        {card.body &&
                            card.body.richText ?
                                <RichText className={styles.body} richText={card.body.richText} />
                            :   
                                <p>{card.body}</p>
                        }
                    </div>
                )
            })}
        </div>
    )
}

bodystatic_cardImg.propTypes = {
    full_width: PropTypes.bool,
    cards: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.shape({
                    align: PropTypes.string,
                    richText: PropTypes.array
                })
            ]), 
            icon: PropTypes.shape({
                asset: PropTypes.shape({url: PropTypes.string})
            })
        })
    }))
}

export default bodystatic_cardImg;