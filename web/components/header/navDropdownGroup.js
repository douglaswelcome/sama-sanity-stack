import React from 'react'
import PropTypes from 'prop-types'
import NavLink from './navLink'
import styles from './header.module.scss'

const NavDropDownGroup = (props) => {
    const {items, title} = props;

    return (
        <div className={styles.dropDown_group} >
            <p className={styles.dropdown_group_label}>{title}</p>
            {items.map((item) => {
                return <NavLink {...item} key={item._key}  />
            })}
        </div>
    )
}


NavDropDownGroup.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    _type: PropTypes.string
}

export default NavDropDownGroup;