import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import styles from './bodystatic-panelAvatarQuote.module.scss'

const bodystatic_panelAvatarQuote = (props) => {
    const {quote, company_logo} = props;

    return (
        <div className="bodystatic-panelAvatarQuote umoja-l-grid--12">
            <div className={styles.front}>
                <div className={styles.icon}>&#8220;</div>
                <div className={styles.body}>
                    <div className={styles.logoWrapper}>
                        <Image src={company_logo} layout="fill" objectPosition="left" />
                    </div>
                    <div className={styles.quoteText}>
                        {quote.quote_text}
                    </div>
                    <div className={styles.authorBlock}>
                        <div className={styles.headshotWrapper}>
                            <Image src={quote.author_headshot} layout="fill" />
                        </div>
                        <div className={styles.authorText}>
                            <p className={styles.author}>{quote.quote_author}</p>
                            <p className={styles.authorTitle}>{quote.author_title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

bodystatic_panelAvatarQuote.propTypes ={
    quote: PropTypes.shape({
        quote_text: PropTypes.string,
        quote_author: PropTypes.string,
        author_title: PropTypes.string,
        author_headshot: PropTypes.shape({
            asset: PropTypes.shape({url: PropTypes.string})
        }),
    }),
    company_logo: PropTypes.shape({
        asset: PropTypes.shape({url: PropTypes.string})
    }),
}

export default bodystatic_panelAvatarQuote;