import React, {useState} from 'react'
import client from '../client'
import { eventsUpcomingQuery, eventsPastQuery, eventsFeaturedQuery } from '../libs/queries'
import Layout from '../components/Layout'
import Event from '../components/event/event'
import {hero_centertxt as HeroCenterTxt} from '../modules'
import styles from './events.module.scss'

const Events = (props) => {
    const {upcoming, past, featured, config} = props;
    const [activeTab, setActiveTab] = useState(0);
    const [tabDir, setTabDir] = useState('');

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
      <Layout config={config}>
          <section className="umoja-l-grid-section">
                <HeroCenterTxt heading="Events" tagline="Sama sponsored events, conferences, and webinars." />
          </section>
          <section className="umoja-l-grid-section">
                <div className={`${styles.featured} umoja-l-grid--12`}>
                    <h2>Featured Events</h2>
                    {featured.map((event, i) => {
                        return <Event {...event} key={i} />
                    })}
                </div>
          </section>
          <section className="umoja-l-grid-section umoja-u-bg--white">
            <div className={`${styles.tabs} umoja-l-grid--12`}>
                <div className={styles.nav}>
                    <div className={`${styles.navInner} ${tabDir}`}>
                            <h5 
                                className={`${styles.nav_item} ${0 == activeTab ? styles.active : ''}`} 
                                data-at={0}
                                onClick={handleClick}
                            >
                                Upcoming Events
                            </h5>
                            <h5 
                                className={`${styles.nav_item} ${1 == activeTab ? styles.active : ''}`} 
                                data-at={1}
                                onClick={handleClick}
                            >
                                Past Events
                            </h5>
                    </div>
                </div>
                <div className={styles.tabWrapper}> 
                        <div 
                            className={`${styles.tab} ${0 == activeTab ? styles.active : ''}`} 
                        >
                            {upcoming.map((event, i) => {
                                return <Event {...event} lightMode={true} key={i} />
                            })}
                        </div>
                        <div 
                            className={`${styles.tab} ${1 == activeTab ? styles.active : ''}`} 
                        >
                            {past.map((event, i) => {
                                return <Event {...event} lightMode={true} key={i} />
                            })}
                        </div>
                </div>
            </div>
          </section>
      </Layout>
    )
}

export async function getStaticProps() {
    const upcoming = await client.fetch(eventsUpcomingQuery);
    const past = await client.fetch(eventsPastQuery);
    const featured = await client.fetch(eventsFeaturedQuery);
    
    return {
        props: {
          upcoming: upcoming,
          past: past,
          featured: featured
        },
    }
}

export default Events;