import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import Link from '../../components/link'
import styles from './bodystatic-galleryGrid.module.scss'

const bodystatic_galleryGrid = (props) => {
    const {gridItems} = props;
    let className = `bodystatic-galleryGrid umoja-l-grid--6 umoja-l-grid-gap--row-2 ${gridItems.length == 4 ? styles._four : ''}`;


    return (
        <div className={className}>
            {gridItems.map((item) => {
                if(item.link){
                    return ( 
                        <Link key={item._key} link={item.link} className={`${styles.item} ${styles.item__link}`}>
                            <div className={styles.imgWrap}>
                                <Image layout="fill" objectFit="cover" src={item.image} />
                            </div>
                            {item.title &&
                                <h4>{item.title}</h4>
                            }
                            {item.body &&
                                <p>{item.body}</p>
                            }
                        </Link>
                    )
                }else{
                    return ( 
                        <div key={item._key} className={styles.item}>
                            <div className={styles.imgWrap}>
                                <Image layout="fill" objectFit="cover" src={item.image} />
                            </div>
                            {item.title &&
                                <h4>{item.title}</h4>
                            }
                            {item.body &&
                                <p>{item.body}</p>
                            }
                        </div>
                    )
                }
            })}
        </div>
    )
}

bodystatic_galleryGrid.propTypes = {
    gridItems: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string,
            link: PropTypes.object,
            image: PropTypes.shape({
                asset: PropTypes.shape({url: PropTypes.string})
            })
        })
    }))
}

export default bodystatic_galleryGrid;