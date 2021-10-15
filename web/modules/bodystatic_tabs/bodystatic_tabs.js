import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import {getFile} from '@sanity/asset-utils'
import Image from '../../components/image'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodystatic-tabs.module.scss'

const bodystatic_tabs = (props) => {
    const {tabs} = props;
    const [activeTab, setActiveTab] = useState(0);
    const [tabHeight, setTabHeight] = useState('100%');
    const [tabDir, setTabDir] = useState('');

    useEffect(() => {
        if(window.innerWidth < 800) return;
        const tabsEl = Array.from(document.querySelectorAll(`.${styles.tab}`));
        let tabHeight = 0;
        tabsEl.map((tab) =>{
            if (tab.offsetHeight > tabHeight){
                tabHeight = tab.offsetHeight;
            } 
        });
        setTabHeight(`${tabHeight}px`);
    })

    const handleClick = (e) => {
        const active = parseInt(e.target.getAttribute('data-at'));
        if(activeTab > active){
            setTabDir(styles._slideLeft)
        }else{
            setTabDir('');
        }
        setActiveTab(active);
    }

    return (
        <div className="bodystatic-tabs umoja-l-grid--12">
            <div className={styles.nav}>
                <div className={`${styles.navInner} ${tabDir}`}>
                    {tabs.map((tab, i) => {
                        return (
                            <h5 
                                className={`${styles.nav_item} ${i == activeTab ? styles.active : ''}`} 
                                data-at={i}
                                key={tab._key}
                                onClick={handleClick}
                            >
                                {tab.title}
                            </h5>
                        )
                    })}
                </div>
            </div>
            <div className={styles.tabWrapper} style={{height: tabHeight}}> 
                {tabs.map((tab, i) => {
                    let media;
                    if(tab.video){
                        const videoPath = getFile(tab.video, client.config());
                        media = <video 
                                    className={styles.video} 
                                    autoPlay="autoplay" 
                                    loop="loop" 
                                    playsInline="playsinline" 
                                    muted={true}
                                >
                                    <source
                                        src={videoPath.asset.url}
                                        type={`video/${videoPath.asset.extension}`}
                                    />
                                </video>;
                    }
                    if(tab.image){
                        <Image src={tab.image} layout="fill" />
                    }
                    return (
                        <div 
                            className={`${styles.tab} ${i == activeTab ? styles.active : ''}`} 
                            key={tab._key}
                        >
                            <h4>{tab.title}</h4>
                            {media}
                            <RichText className={styles.tabContent} richText={tab.body.richText} align={tab.body.align} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

bodystatic_tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.object,
        image: PropTypes.object,
        video: PropTypes.object
    }))
}
  
  export default bodystatic_tabs