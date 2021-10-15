import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import styles from './richText.module.scss'

const richText = (props) => {
    const {align, richText, className} = props;
    const {projectId, dataset} = client.config();
    const innerClass = className ? `${className} ${styles.inner}` : styles.inner;

    const serializers = {
        marks: {
          button_link: ({mark, children}) => {
            const {style} = mark;
            const href = mark.internalLink ? mark.internalLink.slug.current : mark.externalUrl;

            if(style){
                return <Button link={mark} type={style} title={children[0]} />
            }else{
                let linkProps = {href: href};  
                if(mark.externalUrl){
                    linkProps.target = "_blank";
                    linkProps.rel="noopener";
                }
                return <a {...linkProps} href={href}>{children}</a>
            }
          }
        }
    }

    return (
        <BlockContent 
            className={`${innerClass} ${align ? styles[`_${align}`] : ''}`}
            blocks={richText} 
            projectId={projectId} 
            serializers={serializers}
            dataset={dataset} 
            renderContainerOnSingleChild={true}
        />
    )
}

richText.propTypes = {
    className: PropTypes.string,
    align: PropTypes.string,
    richText: PropTypes.arrayOf(PropTypes.object)
}

export default richText;