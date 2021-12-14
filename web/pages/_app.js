import React, {useEffect} from 'react'
import BaseApp from 'next/app'
import client from '../client'
import '../styles/main.scss'

const siteConfigQuery = `*[_id == "global-config"]{
  logo {asset->},
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
  componentDidMount() {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }

  static async getInitialProps ({Component, ctx}) {
    let pageProps = {}

    
    return client.fetch(siteConfigQuery).then(config => {
 
      if (config && pageProps) {
        pageProps.config = config
      }

      return {pageProps}
    })
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Component {...pageProps}  />
    )
  }
}

export default App