import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import useIntersection from '../../libs/useIntersection'
import LottieAnimation from '../../components/lottie_animation'
import Image from '../../components/image'
import styles from './bodymove-featureWindow.module.scss'

const bodymove_featureWindow = (props) => {
    const {features} = props;
    const [activeFeature, setActiveFeature] = useState('feature0');
    const ref = useRef();
    const inViewport = useIntersection(ref, '-50%', false);

    const handleFeatureChange = (e) => {
        setActiveFeature(e.currentTarget.id);
    }

    return (
        <div ref={ref} className='bodymove-featureWindow umoja-l-grid--12'>
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    {features.map((feature, i) => {
                        return (
                            <div 
                                id={`feature${i}`}
                                className={`${styles.selector} ${activeFeature == `feature${i}` ? styles.selector__active : ''}`} 
                                key={feature._key}
                                onClick={handleFeatureChange}
                            >
                                <h5>{feature.title}</h5>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.divider}></div>
                <div className={styles.window}>
                    {features.map((feature, i) => {
                        return (
                            <div className={`${styles.detailWrapper} ${activeFeature == `feature${i}` ? styles.detailWrapper__active : ''}`} key={feature._key}>
                                <p>{feature.description}</p>
                                <div className={styles.img}>
                                    {(feature.animation) &&
                                        <LottieAnimation 
                                            {...feature.animation} 
                                            active={activeFeature == `feature${i}` ? true : false} 
                                            inView={inViewport}
                                        />
                                    }
                                    {feature.image &&
                                        <Image src={feature.image} layout="fill" />
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

bodymove_featureWindow.propTypes = {
    features: PropTypes.arrayOf(PropTypes.shape({
        feature: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.shape({
                asset: PropTypes.shape({url: PropTypes.string})
            }),
            animation: PropTypes.shape({
                id: PropTypes.string,
                loop: PropTypes.bool,
                autoplay: PropTypes.bool,
                json: PropTypes.shape({
                    asset: PropTypes.shape({url: PropTypes.string})
                })
            })
        })
    }))
}

export default bodymove_featureWindow;