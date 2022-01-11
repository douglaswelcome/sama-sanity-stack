import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import Link from 'next/link'
import styles from './footer.module.scss'
import Textfield from '../textfield/textfield'
import Form from '../form/form'
import Button from '../button/button'

const Footer = (props) => {
  const {navItems, logo} = props;
  const [copyright, setCopyright] = useState(0);

  useEffect(() => {
    const year = new Date().getFullYear();
    setCopyright(year);
  });

  return (
    <footer className={styles.wrapper}>
      <div className="umoja-l-grid--12">
        <div className={styles.upper}>
          <div className={styles.upper_left}>
            <h4>Newsletter</h4>
            <p>Subscribe today and be the first to receive the latest from Sama.</p>
            <div>
            <Form id='myForm'>
               <Textfield name='email' label='Email Address'> </Textfield>
              
              <Button title='Sign Me Up' type='submit'>Sign Me Up</Button>
           
            </Form>
            </div>  
          </div>
          <div className={styles.upper_right}>
            {navItems.map((item) => {
              return (
                <div className={styles.nav} key={item._key}>
                  <p className={styles.nav_head}>{item.title}</p>
                  {item.items.map((footerItem) => {
                    if(footerItem.url){
                      if(footerItem.url.internalLink){
                        const slug = footerItem.url.internalLink.slug.current;

                        return (
                          <Link
                            key={footerItem._key}
                            href={{
                              pathname: '/page',
                              query: {slug: slug}
                            }}
                            as={`/${slug}`}
                          >
                            <a className={styles.nav_link}>{footerItem.title}</a>
                          </Link>
                        )
                      }else{
                        return (
                          <a 
                            key={footerItem._key}
                            href={footerItem.url.externalUrl}
                            target="_blank"
                            className={styles.nav_link}
                          >
                            {footerItem.title}
                          </a>
                        )
                      }
                    }
                  })}
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.middle_left}>
            <Link href="/">
              <a>
                <SVG src={logo.asset.url} />
              </a>
            </Link>
          </div>
          <div className={styles.middle_right}>
            <div className={styles.social}>
              <a 
                href="https://www.facebook.com/samaartificialintelligence" 
                className={styles.social_icon}
                target="_blank"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.1 64.89">
                    <title>facebook</title>
                    <g id="fb3209c8-23d4-4288-984d-a2b8f32b7f0c" data-name="Layer 2">
                      <g id="ba1a815d-13f1-45f9-9321-18e9a3cfa5db" data-name="Layer 1">
                        <path d="M35.1,11.26V1.36A1.35,1.35,0,0,0,33.76,0H25.35A15.34,15.34,0,0,0,14,4.35C11.24,7.2,9.78,11.22,9.78,16v7.34H1.34A1.34,1.34,0,0,0,0,24.66V35.32a1.35,1.35,0,0,0,1.34,1.35H9.78V63.55a1.34,1.34,0,0,0,1.34,1.34h11a1.34,1.34,0,0,0,1.34-1.34V36.67h9.87a1.35,1.35,0,0,0,1.34-1.35V24.66a1.37,1.37,0,0,0-.7-1.18,1.47,1.47,0,0,0-.67-.16H23.49V17.1c0-1.72.25-2.69.84-3.37s1.88-1.13,3.77-1.13h5.66A1.34,1.34,0,0,0,35.1,11.26Z" />
                      </g>
                    </g>
                  </svg>
              </a>
              <a 
                href="https://www.instagram.com/sama_ai_" 
                className={styles.social_icon} 
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57">
                  <title>insta</title>
                  <g id="ef02a3ef-c0d3-4be7-9d4e-2c42263777a3" data-name="Layer 2">
                    <g id="a0a92778-6c5c-4e06-a08f-641546580dd0" data-name="Layer 1">
                      <circle cx="28.5" cy="28.5" r="9.24" />
                      <path d="M41.57,0H15.43A15.45,15.45,0,0,0,0,15.43V41.57A15.45,15.45,0,0,0,15.43,57H41.57A15.45,15.45,0,0,0,57,41.57V15.43A15.45,15.45,0,0,0,41.57,0ZM28.5,42.74A14.24,14.24,0,1,1,42.74,28.5,14.26,14.26,0,0,1,28.5,42.74ZM44.46,17a5,5,0,1,1,5-5A5,5,0,0,1,44.46,17Z" />
                    </g>
                  </g>
                </svg>
              </a>
              <a 
                href="https://twitter.com/SamaAI" 
                className={styles.social_icon} 
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 51.19">
                  <title>twitter</title>
                  <g id="e7743e55-1863-47ad-a995-4b7f1f924f07" data-name="Layer 2">
                    <g id="ec8c6fd9-2f52-4507-9a24-804bc60dbc33" data-name="Layer 1">
                      <path d="M23.59,51.19c-10.35,0-18.53-1.81-22.44-5l-.07-.06L1,46.1a3.19,3.19,0,0,1-.84-3.35l0-.1a3.24,3.24,0,0,1,3-2,26.57,26.57,0,0,0,7.06-1,13.45,13.45,0,0,1-7.07-8.16,2.92,2.92,0,0,1,1-3.38,3.06,3.06,0,0,1,.88-.45,19.52,19.52,0,0,1-4-7.18l0-.08,0-.09a3,3,0,0,1,1.4-3.23,3,3,0,0,1,1.43-.4,15.15,15.15,0,0,1-1.14-3.49A14.59,14.59,0,0,1,4.24,3.47l.38-.77a2.15,2.15,0,0,1,3.44-.56l.7.7c5.53,5.81,10.49,8.56,19.06,10.44a15.17,15.17,0,0,1,4.1-8.75A14.39,14.39,0,0,1,42.19,0h0c2.84,0,6.36,1.62,8.49,2.77,1.83-.6,4-1.53,6.32-2.51a2.88,2.88,0,0,1,3.22.57,2.85,2.85,0,0,1,.62,3.11c-.17.47-.36.92-.57,1.36a3.07,3.07,0,0,1,.84.58,3.13,3.13,0,0,1,.78,2.92l0,.1a11.92,11.92,0,0,1-4.78,6.56C56.73,35.23,41.84,51.19,23.59,51.19Z" />
                    </g>
                  </g>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/sama-ai/" 
                className={styles.social_icon} 
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.71 60.79">
                  <title>linkedin</title>
                  <g id="bd073dff-b6ea-4cf0-bfeb-c3ce392ee6a5" data-name="Layer 2">
                    <g id="f6b6eb77-7c10-4e27-a3d0-6f8b14e97f2e" data-name="Layer 1">
                      <path d="M59.65,60.79l-12.35,0,0-19.36c0-4.62-.07-10.56-6.41-10.58s-7.44,5-7.45,10.21l0,19.7-12.36,0,.09-40.95,11.87,0v6.57h.16c1.66-3.13,5.7-6.42,11.73-6.41,12.51,0,14.81,8.28,14.79,19l-.05,21.85Z" />
                      <path d="M7.17,14.35a7.18,7.18,0,1,1,7.18-7.18A7.17,7.17,0,0,1,7.17,14.35Z" />
                      <rect x="0.98" y="19.8" width="12.39" height="40.95" />
                    </g>
                  </g>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/c/SamaAI" 
                className={styles.social_icon} 
                target="_blank"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 44.63">
                    <title>youtube</title>
                    <g id="b03ac260-8029-40d4-832d-1f2d757db2d5" data-name="Layer 2">
                      <g id="eca1bfe4-f0ec-4c24-9169-be6d2f8b24b5" data-name="Layer 1">
                        <path d="M55,0H10A10,10,0,0,0,0,10V34.63a10,10,0,0,0,10,10H55a10,10,0,0,0,10-10V10A10,10,0,0,0,55,0ZM40.89,24.41,28.3,31.18a2.31,2.31,0,0,1-3.41-2V15.48a2.3,2.3,0,0,1,3.42-2l12.6,6.89a2.31,2.31,0,0,1,0,4.06Z" />
                      </g>
                    </g>
                  </svg>
              </a>
            </div>
          </div>
        </div>      
        <div className={styles.lower}>
          <div className={styles.lower_left}>
            <Link href="/terms-of-service">
              <a className={styles.nav_link}>Terms</a>
            </Link>
            <Link href="/privacy-policy">
              <a className={styles.nav_link}>Privacy</a>
            </Link>
            <Link href="/quality-and-information-policy">
              <a className={styles.nav_link}>Quality & Information</a>
            </Link>
          </div>
          <div className={styles.lower_right}>
            <h6>Copyright © {copyright} Sama Inc.</h6>
            <h6>All rights reserved.</h6>
          </div>
        </div>
      </div>
      
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/6398568.js"></script>

    </footer>



  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  })),
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      url: PropTypes.string
    }),
    logo: PropTypes.string
  })
}

export default Footer


