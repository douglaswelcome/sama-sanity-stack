import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button/button'
import Image from '../../components/image'
import Video from '../../components/video'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodymove-splitTxtImg.module.scss'

const bodymove_splitTxtImg  = (props) => {
    const {slides} = props;
    const [activeSlide, setActiveSlide] = useState(0);
    const [slideDir, setSlideDir] = useState('');

    const handleClick = (e) => {
        const active = parseInt(e.target.getAttribute('data-at'));
        document.querySelector(`.${styles.carousel_slides}`).style.left = ((100 * active) * -1 ) + '%';
        setActiveSlide(active);
    }

    return (
        <div className="bodymove-splitTxtImg umoja-l-grid--12 umoja-l-grid-gap--row-2 umoja-l-grid-align--center">
            <div className={styles.topNav}>
                {slides.map((slide, i) => {
                    return ( 
                        <p 
                            className={`${styles.topNav_item} ${i == activeSlide ? styles.active : ''}`} 
                            data-at={i}
                            key={slide._key}
                            onClick={handleClick}
                        >
                            {slide.preheading ? slide.preheading : slide.title}
                        </p>
                    )
                })}
            </div>
            <div className={`${styles.carouselNav} ${styles.carouselNav__left} ${activeSlide == 0 ? styles.carouselNav__hide : ''}`} onClick={handleClick} data-at={activeSlide - 1}></div>
            <div className={styles.carousel}>
                <div className={styles.carousel_slides}>
                {slides.map((slide, i) => {
                    return  (   
                        <div 
                            className={`${styles.carousel_slide} ${i == activeSlide ? styles.active : ''} umoja-l-grid--6`}
                            data-at={i}
                            key={slide._key}
                        >
                            <div className={styles.carousel_slide_left}>
                                {slide.preheading &&
                                    <h2>{ slide.preheading }</h2>
                                }
                                {slide.title &&
                                    <h3>{slide.title}</h3>
                                }
                                <p>{slide.body}</p>
                                {slide.cta.title &&
                                    <Button {...slide.cta} />
                                }
                            </div>
                            <div className={styles.carousel_slide_right}>
                                {slide.bullets &&
                                    <div className={styles.list}>
                                        {slide.bullets.map((bullet, i) => {
                                            return  (
                                                <div key={bullet._key} className={styles.list_item}>
                                                    {bullet.icon &&
                                                        <Image src={bullet.icon} layout="fixed" width={28} height={28} />
                                                    }
                                                    <div className={styles.list_item_copy}>
                                                        <h3>{bullet.title}</h3>
                                                        <RichText className={styles.list_item_body} richText={bullet.body.richText} align={bullet.body.align} />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                                {slide.image &&
                                    <div className={styles.imgWrap}>
                                        <Image src={image} layout="responsive" objectFit="cover" />
                                    </div>
                                }
                                {slide.video &&
                                    <div className={styles.imgWrap}>
                                        <Video src={video} />
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div class={`${styles.carouselNav} ${styles.carouselNav__right} ${activeSlide == (slides.length - 1) ? styles.carouselNav__hide : ''}`} onClick={handleClick} data-at={activeSlide + 1}></div> 
        </div>
    )
}

bodymove_splitTxtImg.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        bodymove_splitTxtImg_slide: PropTypes.shape({
            img_frame: PropTypes.bool,
            heading: PropTypes.string,
            preheading: PropTypes.string,
            body: PropTypes.object,
            cta: PropTypes.object,
            bullets: PropTypes.array,
            image: PropTypes.object,
            video: PropTypes.object
        })
    }))
}

export default bodymove_splitTxtImg;