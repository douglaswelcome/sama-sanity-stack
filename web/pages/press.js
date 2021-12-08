import React, {useState} from 'react'
import client from '../client'
import {pressFeaturedQuery, pressQuery, pressNewsQuery} from '../libs/queries'
import dynamic from "next/dynamic";
import { useNextSanityImage } from 'next-sanity-image';
const Layout = dynamic(() => import('../components/Layout'));
import Image from '../components/image'
import styles from './press.module.scss'

const Press = (props) => {
    let {featured, press, news} = props;
    const featuredMain = featured[0];
    featured = featured.slice(1);
    const featuredMainBackground = useNextSanityImage(client, featuredMain.background);

    const [activeTab, setActiveTab] = useState(0);
    const [tabDir, setTabDir] = useState('');
    const config = {
      ...props.config,
      ...props.pageConfig
    }

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
            <div className="umoja-l-grid--12">
                <div className={styles.hero}>
                    <h1>Press & Media</h1>
                    <p>AI has a story to tell. For media inquiries, please contact us at <a href="mailto:press@sama.com">press@sama.com</a>.</p>
                </div>
            </div>
          </section>
          <section className="umoja-l-grid-section umoja-u-bg--charcoal3">
              <div className="umoja-l-grid--12">
                <div className={styles.featureHeadline}>
                  <h2 className="display-small">Featured Press</h2>
                  <div className="divider-line divider-line--horizontal divider-line--negative"></div>
                  <p>Great results gets you noticed. Read the latest news about Sama.</p>
                </div>
                <div className={`${styles.featuredMain} ${styles.featuredArticle}`}>
                  <a 
                    href={featuredMain.article_url} 
                    className={styles.featured_link} 
                    target="_blank" 
                    rel="noopener"
                    style={{backgroundImage:`url(${featuredMainBackground.src})`}}
                  >
                    <div className={styles.featured_category}>
                      <p>{featuredMain.type}</p>
                    </div>
                    <h2 className={styles.featured_title}>{featuredMain.headline}</h2>
                    <div className={styles.featured_logo}>
                      <div className={styles.featured_logoWrap}>
                        <Image layout="fill" objectFit="contain" src={featuredMain.publication_icon} />
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.featuredSecondary}>
                  {featured.map((feature, i) => {
                    const featureBackground = useNextSanityImage(client, feature.background);
                    return  (
                      <div className={styles.featuredArticle} key={i}>
                        <a 
                          href={feature.article_url} 
                          className={styles.featured_link} 
                          target="_blank" 
                          rel="noopener"
                          style={{backgroundImage:`url(${featureBackground.src})`}}
                        >
                          <div className={styles.featured_category}>
                            <p>{feature.type}</p>
                          </div>
                          <h3 className={styles.featured_title}>{feature.headline}</h3>
                          <div className={styles.featured_logo}>
                            <div className={styles.featured_logoWrap}>
                              <Image layout="fill" objectFit="contain" src={feature.publication_icon} />
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </div>
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
                                In the News
                            </h5>
                            <h5 
                                className={`${styles.nav_item} ${1 == activeTab ? styles.active : ''}`} 
                                data-at={1}
                                onClick={handleClick}
                            >
                                Press Releases
                            </h5>
                    </div>
                </div>
                <div className={styles.tabWrapper}> 
                  <div 
                      className={`${styles.tab} ${0 == activeTab ? styles.active : ''}`} 
                  >
                    {news.map((article, i) => {
                      let date = new Date(article.date);
                      date = date.toLocaleString('en-US', {
                          day: 'numeric',
                          year: 'numeric',
                          month: 'long',
                          hour: 'numeric',
                          minute: 'numeric',
                      });
                      return  (
                        <a 
                          key={i}
                          href={article.article_url} 
                          className={styles.pressArticle} 
                          target="_blank"
                          rel="noopener"
                        >
                          <div className={styles.pressArticle_title}>
                            <p>{date}</p>
                            <div className="divider-line divider-line--horizontal"></div>
                            <h5>{`"${article.headline}"`}</h5>
                          </div>
                          <div className={styles.pressArticle_logo}>
                            <Image layout="fill" objectFit="contain" src={article.publication_icon} />
                          </div>
                      </a>
                      )
                    })}
                  </div>
                  <div 
                      className={`${styles.tab} ${1 == activeTab ? styles.active : ''}`} 
                  >
                    {press.map((article, i) => {
                      let date = new Date(article.date);
                      date = date.toLocaleString('en-US', {
                          day: 'numeric',
                          year: 'numeric',
                          month: 'long',
                          hour: 'numeric',
                          minute: 'numeric',
                      });
                      return  (
                        <a 
                          key={i}
                          href={article.article_url} 
                          className={styles.pressArticle} 
                          target="_blank"
                          rel="noopener"
                        >
                          <div className={styles.pressArticle_title}>
                            <p>{date}</p>
                            <div className="divider-line divider-line--horizontal"></div>
                            <h5>{`"${article.headline}"`}</h5>
                          </div>
                          <div className={styles.pressArticle_logo}>
                            <Image layout="fill" objectFit="contain" src={article.publication_icon} />
                          </div>
                      </a>
                      )
                    })}
                  </div>
                </div>
              </div>
          </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const featured = await client.fetch(pressFeaturedQuery);
    const press = await client.fetch(pressQuery);
    const news = await client.fetch(pressNewsQuery);

    return {
        props: {
          featured: featured,
          press: press,
          news: news,
          pageConfig:{
            title: "Sama Press & Media | Training Data, AI and Impact Sourcing Insights",
            description: "Ethical AI Has a Story to Tell. Read the Latest News About Sama."
          }
        },
    }
}

export default Press;

