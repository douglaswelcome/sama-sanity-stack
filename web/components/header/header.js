import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import styles from './header.module.scss'
import NavDropDown from './navDropdown'
import NavLink from './navLink'

class Header extends Component {
  state = {showNav: false}

  static propTypes = {
    title: PropTypes.string,
    navItems: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.object)
    }),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      }),
      logo: PropTypes.string
    })
  }

  hideMenu = () => {
    this.setState({showNav: false})
  }

  handleMenuToggle = () => {
    const {showNav} = this.state
    this.setState({
      showNav: !showNav
    })
  }

  render () {
    const {title = 'Missing title', navItems, logo} = this.props;
    const {items} = navItems;
    const {showNav} = this.state;

    return (
      <header className={styles.outer}>
        <nav className={`umoja-l-grid--12 ${styles.wrapper}`}>
          <a href="/" className={styles.logo}>
            <SVG src={logo.asset.url} />
          </a>
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
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)
