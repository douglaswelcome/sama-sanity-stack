import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import styles from './bodystatic-panelQuote.module.scss'

const bodystatic_panelQuote = (props) => {
    const {quote} = props;

    const citation = (quote.author_title ? `${quote.quote_author}, ${quote.author_title}` : quote.quote_author)

    return(
        <div className="bodystatic-panelQuote umoja-l-grid--12">
            <div className={styles.inner}>
                <div className={styles.gradient}></div>
                <div className={styles.content}>
                    <p className={styles.txt}>{quote.quote_text}</p>
                    <p className={styles.author}>{citation}</p>
                </div>
                <div className={styles.imgWrap}>
                    <Image src={quote.author_headshot} layout="fill" />
                </div>
            </div>
        </div>
    )
}

bodystatic_panelQuote.propTypes = {
    quote: PropTypes.shape({
        quote_text: PropTypes.string,
        quote_author: PropTypes.string,
        author_title: PropTypes.string,
        author_headshot: PropTypes.shape({
            asset: PropTypes.shape({url: PropTypes.string})
        }),
    }),
}

export default bodystatic_panelQuote;