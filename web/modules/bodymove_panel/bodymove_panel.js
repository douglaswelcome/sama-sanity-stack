import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodymove-panel.module.scss'

const bodymove_panel  = (props) => {
    const {title, slides} = props;
    const [activeSlide, setActiveSlide] = useState(0);

    const handleClick = (e) => {
        const active = parseInt(e.currentTarget.getAttribute('data-at'));
        setActiveSlide(active);
    }

    return (
        <div className="bodymove-panel">
            <div className={`${styles.panels} umoja-l-grid--12`}>
                {title &&
                    <h2 className={styles.carouselTitle__mobile}>{title}</h2>
                }
                {slides.map((slide, i) => {
                    return  (
                        <div                             
                            className={`${styles.panel} ${i == activeSlide ? styles.active : ''}`} 
                            data-at={i}
                            key={slide._key}
                        >
                            {title &&
                                <h2 className={styles.carouselTitle}>{title}</h2>
                            }
                            <div className={styles.panel_content}>
                                <h3>{slide.title}</h3>
                                <RichText className={styles.panel_body} richText={slide.body.richText} align={slide.body.align} />
                            </div>
                            <div className={styles.imageWrap}>
                                <Image src={slide.image} layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    )
                })}
                <div className={`${styles.slidePanel} ${styles.slidePanel__left} ${activeSlide == 0 ? styles.slidePanel__hide : ''}`} onClick={handleClick} data-at={activeSlide - 1}></div>
                <div className={`${styles.slidePanel} ${styles.slidePanel__right} ${activeSlide == (slides.length - 1) ? styles.slidePanel__hide : ''}`} onClick={handleClick} data-at={activeSlide + 1}></div>
            </div>
            <div className={styles.nav}>
                {slides.map((slide, i) => {
                    const slideNum = i + 1;
                    return  (
                        <h4
                            className={`${styles.nav_item} ${i == activeSlide ? styles.active : ''}`} 
                            data-at={i}
                            key={slide._key}
                            onClick={handleClick}
                        >
                            <span>{`0${slideNum}`}</span> {slide.title}
                        </h4>
                    )
                })}
            </div>
        </div>
    )
}

bodymove_panel.propTypes = {
    title: PropTypes.string,
    slides: PropTypes.arrayOf(PropTypes.shape({
        panel_slide: PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.object,
            image: PropTypes.object,
        })
    }))
}

export default bodymove_panel;