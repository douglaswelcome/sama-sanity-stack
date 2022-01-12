import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import RichText from '../../components/richText_field/richText_field'
import Image from '../../components/image'
import Button from '../../components/button/button'
import styles from './bodymove-accordion.module.scss'

const bodymove_accordion = (props) => {
    const {panels} = props;
    const [activePanel, setActivePanel] = useState(null);

    const handlePanelChange = (e) => {
        const current = document.querySelector(`.${styles.panel__active}`);
        const active = parseInt(e.currentTarget.getAttribute('data-at'));

        if(current){
            const openPanel = current.querySelector(`.${styles.panel_body}`);
            openPanel.style.maxHeight = 0;
            if(active == parseInt(current.getAttribute('data-at'))){
                setActivePanel(null);
                return;
            }
        }

        const panelBody = e.currentTarget.querySelector(`.${styles.panel_body}`);
        setActivePanel(active);
        panelBody.style.maxHeight = `${panelBody.scrollHeight}px`;
    }

    return (
        <div className='bodymove-accordion umoja-l-grid--12'>
            {panels.map((panel, i) => {
                return  (
                    <div 
                        className={`umoja-l-grid--12 ${styles.panel} ${activePanel == i ? styles.panel__active : ''}`} 
                        key={i}
                        onClick={handlePanelChange}
                        data-at={i}
                    >
                        <div className={styles.panel_head}>
                            <h4>{panel.title}</h4>
                            <div className={styles.panel_toggle}></div>    
                        </div>
                        <div className={styles.panel_body}>
                            <div className={styles.panel_body_left}>
                                <RichText className={styles.body} richText={panel.body_copy.richText} align={panel.body_copy.align} />
                                {panel.cta &&
                                    <p className={styles.panel_cta}>
                                        <Button link={panel.cta_url} type="arrow" title={panel.cta} />
                                    </p>
                                }
                            </div>
                            <div className={styles.panel_body_right}>
                                {panel.image &&
                                    <Image src={panel.image} layout="responsive" objectFit="cover"/>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

bodymove_accordion.propTypes = {
    panels: PropTypes.arrayOf(PropTypes.shape({
        panel: PropTypes.shape({
            title: PropTypes.string,
            body_copy: PropTypes.object,
            image: PropTypes.shape({
                asset: PropTypes.shape({url: PropTypes.string})
            }),
        })
    }))
}

export default bodymove_accordion;