import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button/button'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import styles from './bodystatic-richTxt.module.scss'

const bodystatic_richTxt = (props) => {
    const {align, text} = props;
    const {projectId, dataset} = client.config();

    const serializers = {
        marks: {
          button_link: ({mark, children}) => {
            const {style} = mark;
            const href = mark.internalLink ? `/${mark.internalLink.slug.current}` : mark.externalLink;

            if(style){
                return <Button link={href} type={style} title={children[0]} />
            }else{
                let linkProps = {href: href};  
                if(mark.externalLink){
                    linkProps.target = "_blank";
                    linkProps.rel="noopener";
                }
                return <a {...linkProps} href={href}>{children}</a>
            }
          }
        }
    }

    return (
        <div className="bodystatic_richTxt umoja-l-grid--12">
            <BlockContent 
                className={`${styles.inner} ${align ? styles[`_${align}`] : ''}`}
                blocks={text} 
                projectId={projectId} 
                serializers={serializers}
                dataset={dataset} 
                renderContainerOnSingleChild={true}
            />
        </div>
    )
}

bodystatic_richTxt.propTypes = {
    align: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.object)
}

export default bodystatic_richTxt;