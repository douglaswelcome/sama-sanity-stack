import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NavLink from './navLink'
import NavDropDownGroup from './navDropdownGroup'
import { useRouter } from 'next/router'
import styles from './header.module.scss'

const NavDropDown = (props) => {
    const {items, title} = props;
    const { asPath } = useRouter();
    const isHome = asPath == '/' ? true : false;
    const currentSlug = !isHome && asPath.charAt(0) == '/' ? asPath.substring(1) : asPath;
    const [active, setActive] = useState(false);
    const className = active ? `${styles.navItem_label} ${styles.navItem_label__active}` : `${styles.navItem_label}`;


    useEffect(() => {
        const subLinks = items.map(item => {
            let subItems = [];
            //check for grouped links
            if(item.items){
                item.items.map(groupedItem => {
                    if(groupedItem.url.internalLink){
                        subItems.push(groupedItem.url.internalLink.slug.current)
                    }
                    if(groupedItem.url.internalLink_custom){
                        const internalLinkCustom = item.url.internalLink_custom.charAt(0) == '/' ? item.url.internalLink_custom.substring(1) : item.url.internalLink_custom;
                        subItems.push(internalLinkCustom)
                    }
                })
            }else{
                if(item.url.internalLink){
                    subItems.push(item.url.internalLink.slug.current)
                }
                if(item.url.internalLink_custom){
                    const internalLinkCustom = item.url.internalLink_custom.charAt(0) == '/' ? item.url.internalLink_custom.substring(1) : item.url.internalLink_custom;
                    subItems.push(internalLinkCustom)
                }
            }
            return subItems;
        })

        const isActive = subLinks.some(item => {
            return item == currentSlug
        });
        setActive(isActive)
    });

    return (
        <>
        <p className={className}>{title}</p>
        <div className={styles.dropDown}>
            {items.map((item) => {
                if(item._type == 'navCat'){
                    return (
                        <NavDropDownGroup {...item} key={item._key}  />
                    )
                }else{
                    return (
                        <NavLink {...item} key={item._key}  />
                    )
                }
            })}
        </div>
        </>
    )
}


NavDropDown.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    _type: PropTypes.string
}

export default NavDropDown;