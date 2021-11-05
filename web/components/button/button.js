import React from 'react'
import PropTypes from 'prop-types'
import Link from '../link'
import styles from './button.module.scss'

const Button = (props) => {
    const {title, type, size, link} = props;

    const wrapperClass = `${styles.wrapper} ${type ? styles[`_${type}`] : ''} ${size ? styles[`_${size}`] : ''}`;
    const buttonInner =  <button className={styles.btn}>
                            <h3 className={styles.text}>{title}</h3>
                        </button>

    if(link){
        return (
            <Link className={wrapperClass} link={link}>
                {buttonInner}
            </Link>
        )
    }else{
        return (
            <div className={wrapperClass}>
                {buttonInner}
            </div>
        )
    }
}

Button.propTypes ={
    link: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    title: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string
}

export default Button