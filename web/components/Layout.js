import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import {LogoJsonLd} from 'next-seo'
import Header from './header/header'
import Footer from './Footer'

function Layout (props) {
  const {config, children} = props

  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }

  const {title, mainNav, footerNav, logo, url} = config

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
        <title>Sama - Make Training Data Your Competitive Advantage</title>
      </Head>
      <div className='container'>
        <Header title={title} navItems={mainNav} logo={logo} />
        <main className='content'>{children}</main>
        <Footer navItems={footerNav} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNav: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.object)
    }),
    footerNav: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.object)
    }),
    url: PropTypes.string,
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      })
    }),
  })
}

export default Layout
