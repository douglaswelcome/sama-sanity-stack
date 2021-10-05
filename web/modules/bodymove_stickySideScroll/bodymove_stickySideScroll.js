import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import {getFile} from '@sanity/asset-utils'
import client from '../../client'
import Image from '../../components/image'
import styles from './bodymove-stickySideScroll.module.scss'

const bodymove_stickySideScroll = (props) => {
    const {heading, description, items} = props;
    const [activeTab, setActiveTab] = useState(false);
    const [isPinned, setPinned] = useState(false);

    useEffect(() => {
        const headerHeight = document.querySelector(`.${styles.header}`).getBoundingClientRect().height;
        const sideTabs = document.querySelector('.bodymove_stickySideScroll').style;
        sideTabs.setProperty('--headerHeight', headerHeight+"px");
        buildObserver()
    })

    const buildObserver = () => {
        let observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: [0.66, 1.0]
        };
        const tabObserver = new IntersectionObserver(intersectionCallback, observerOptions);
        
        function intersectionCallback(entries) {
            entries.forEach(function (entry) {
                const current = parseInt(entry.target.getAttribute('data-at'));
                //first tab gets triggered when sticky scroll is activated
                //other tabs when they're 1/2 in viewport
                const visibilityTrigger = (current == 0 ? 1.0 : 0.66);

                if(entry.intersectionRatio >= visibilityTrigger){
                    if(current !== activeTab){
                        setActiveTab(current);
                        document.querySelector(`.${styles.title}[data-at="${current}"]`).classList.add(styles.title__active)
                    }
                }
            });
        }
      
        document.querySelectorAll(`.${styles.content}`).forEach((tab) => {
            tabObserver.observe(tab);

            if(window.innerWidth < 800){
                tabObserver.disconnect();
            }
        });

        //prevent header and nav overalapping at end of sticky
        let headerObserverOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        function headerObserverCallback(entries){
            entries.forEach(function (entry) {
                if(entry.intersectionRatio >= 1 && !isPinned){
                    setPinned(true);
                }else if(entry.intersectionRatio < 1 && isPinned){
                    setPinned(false)
                }
            });
        }
        const headerObserver = new IntersectionObserver(headerObserverCallback, headerObserverOptions);
        headerObserver.observe(document.querySelector(`.${styles.nav}`));
    }

    const handleTabChange = (e, index) => {
        e.preventDefault();
        setActiveTab(index);
        document.querySelectorAll(`.${styles.content}`)[index].scrollIntoView({behavior: "smooth", block: "center"});
    }

    const className = `bodymove_stickySideScroll umoja-l-grid--12 ${isPinned ? styles._pinned : ''}`
    return (
        <div className={className}>
            <div className={styles.header}>
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
            <div className={styles.left}>
                <div className={styles.nav}>
                    <ul className={styles.nav_items}>
                        {items.map((item, i) => {                            
                            return (
                                <li 
                                    className={styles.title} 
                                    key={item._key}
                                    data-at={i}
                                    onClick={(e) => handleTabChange(e , i)}
                                >
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.right}>
                {items.map((item, i) => {
                    const itemClass = `${styles.content} ${activeTab == i ? styles._active : ''}`;

                    return (
                        <div 
                            className={itemClass} 
                            data-at={i}
                            key={item._key}
                        >
                            <div className={styles.content_inner}>
                                <h3>{ item.title }</h3>
                                <p>{ item.text }</p>
                            </div>               
                        </div>
                    )
                })}
            </div>
            {items.map((item, i) => {
                const mediaClass = `${styles.media} ${activeTab == i ? styles._active : ''}`;
                if(item.video){
                    const videoPath = getFile(item.video, client.config());
                    return (
                        <video 
                            data-at={i} 
                            className={mediaClass} 
                            autoPlay={true}
                            loop={true} 
                            playsInline={true} 
                            muted={true}
                            key={item._key}
                        >
                            <source src={videoPath.asset.url} type={`video/${videoPath.asset.extension}`} />
                        </video>
                    )
                }else{
                    return <Image layout="fill" src={item.image} key={item._key} />
                }
            })}  
        </div>
    )
}

bodymove_stickySideScroll.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array
}

export default bodymove_stickySideScroll;