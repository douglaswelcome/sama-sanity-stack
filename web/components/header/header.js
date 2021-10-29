import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import styles from './header.module.scss'
import Link from 'next/link'
import NavDropDown from './navDropdown'
import NavLink from './navLink'
import Button from '../button/button'

class Header extends Component {
  state = {showNav: false}

  static propTypes = {
    title: PropTypes.string,
    navItems: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.object),
      nav_cta: PropTypes.shape({
        link: PropTypes.object,
        title: PropTypes.string,
        type: PropTypes.string
      })
    }),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      }),
      logo: PropTypes.string
    })
  }

  handleMenuToggle = () => {
    const {showNav} = this.state
    this.setState({
      showNav: !showNav
    })
  }

  render () {
    const {title = 'Missing title', navItems, logo} = this.props;
    const {items, nav_cta} = navItems;
    const {showNav} = this.state;

    return (
      <header className={`${styles.outer} ${showNav ? styles._active: ''}`}>
        <nav className={`umoja-l-grid--12 ${styles.wrapper}`}>
          <Link href="/">
            <a className={styles.logo}>
              <SVG src={logo.asset.url} />
            </a>
          </Link>
          <button 
            className={styles.hamburger} 
            type="button"
            onClick={this.handleMenuToggle}
          >
            <span className={styles.hamburger_box}>
              <span className={styles.hamburger_box_inner}></span>
            </span>
          </button>
          <ul className={styles.navBar}>
            {items.map((item) => {
              return (
                <li className={styles.navItem} key={item._key}>
                  {item._type == 'navDropdownMenu' ?
                      <NavDropDown {...item} />
                      :
                      <NavLink {...item} />
                  }
                </li>
              )
            })}
          </ul> 
          {nav_cta &&
            <div className={styles.cta}>
              <Button {...nav_cta} size="small" />
            </div>
          } 
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)
