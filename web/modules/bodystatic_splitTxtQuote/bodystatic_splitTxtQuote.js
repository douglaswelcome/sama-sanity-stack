import React from 'react'
import PropTypes from 'prop-types'
import RichText from '../../components/richText_field/richText_field'
import Button from '../../components/button/button'
import Image from '../../components/image'
import styles from './bodystatic-splitTxtQuote.module.scss'

const bodystatic_splitTxtQuote  = (props) => {
    const {img_position, theme_color, heading, preheading, body, cta, quote, fullwidth_image} = props;
    const className = `bodystatic-splitTxtQuote umoja-l-grid--6 ${theme_color ? styles[`_${theme_color}`] : ''}`;
    const txtColClass = `${styles.copy} ${img_position == 'left' ? styles._right : styles._left}`;
    const quoteColClass = `${styles.quote} ${img_position == 'left' ? styles._left: styles._right}`;

    return (
        <div className={className}>
            <div className={txtColClass}>
                {preheading &&
                    <h3 className={styles.preheading}>{preheading}</h3>
                }
                <h2>{heading}</h2>
                <RichText className={styles.body} richText={body.richText} align={body.align} />
                {cta.link &&
                    <Button {...cta} />
                }
            </div>
            <div className={`${quoteColClass} ${fullwidth_image ? styles.__imageFull : ''}`}>
                {quote.author_headshot &&
                    <div className={styles.imageWrap}>
                        <Image src={quote.author_headshot} layout="fill" />
                    </div>
                }
                <div className={styles.quote_content}>
                    <div className={styles.quote_icon}>&#8220;</div>
                    <p className={styles.quote_text}>{quote.quote_text}</p>
                    <p className={styles.quote_citation}>{quote.quote_author}, {quote.author_title}</p>
                </div>
            </div>
        </div>
    )
}

bodystatic_splitTxtQuote.propTypes = {
    img_position: PropTypes.string,
    theme_color: PropTypes.string,
    img_frame: PropTypes.bool,
    heading: PropTypes.string,
    preheading: PropTypes.string,
    body: PropTypes.object,
    cta: PropTypes.object,
    image: PropTypes.object,
    fullwidth_image: PropTypes.bool
}

export default bodystatic_splitTxtQuote;