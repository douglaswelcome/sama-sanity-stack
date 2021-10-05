import React from 'react'
import BaseApp from 'next/app'
import client from '../client'
import '../styles/main.scss'

const siteConfigQuery = `*[_id == "global-config"]{
  title,
  logo {asset->},
  frontpage ->,
  mainNav-> {
  	items[]{
      ...,
      url{..., internalLink->{slug}},
      items[]{
        ...,
        url{..., internalLink->{slug}},
      items[]{
        ...,
        url{..., internalLink->{slug}}
      }
      }
    },
    nav_cta
	},
  footerNav-> {
  	items[]{
      ...,
      url{..., internalLink->{slug}},
      items[]{
        ...,
        url{..., internalLink->{slug}},
      }
    }
  }
}[0]`;

class App extends BaseApp {

  static async getInitialProps ({Component, ctx}) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    
    return client.fetch(siteConfigQuery).then(config => {
      if (!config) {
        return {pageProps}
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return {pageProps}
    })
  }

  render () {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}

export default App