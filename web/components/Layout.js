import React from 'react'
import PropTypes from 'prop-types'
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from 'next/head'
const Header = dynamic(() => import('./header/header'))
const Footer = dynamic(() => import('./footer/footer'))

function Layout (props) {
  const {config, children} = props

  if (!config) {
    return <div>Missing config</div>
  }

  let {title, description, mainNav, footerNav, logo} = config;
  const domain = 'https://sama.com';
  const router = useRouter();
  const _pathSliceLength = Math.min.apply(Math, [
      router.asPath.indexOf('?') > 0 ? router.asPath.indexOf('?') : router.asPath.length,
      router.asPath.indexOf('#') > 0 ? router.asPath.indexOf('#') : router.asPath.length
  ]);
  const canonicalUrl = domain + router.asPath.substring(0, _pathSliceLength);

  description = description ? description : "Trusted by over 25% of Fortune 50 Companies, Sama Provides High-Quality Training Data, Validation &amp; Annotation Solutions for AI &amp; Machine Learning Models.";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
        <title>{title}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta name="msapplication-TileColor" content="#28282a" />
        <meta name="theme-color" content="#ffffff"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className='container'>
        <Header title={title} navItems={mainNav} logo={logo} />
        <main className='content'>{children}</main>
        <Footer navItems={footerNav.items} logo={logo} />
      </div>
    </>
  )
}

Layout.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNav: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.object),
      nav_cta: PropTypes.shape({
        link: PropTypes.object,
        title: PropTypes.string,
        type: PropTypes.string
      })
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
