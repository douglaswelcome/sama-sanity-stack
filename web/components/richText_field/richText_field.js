import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import Image from '../image'
import Link from '../link'
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../client'
import styles from './richText.module.scss'

const richText = (props) => {
    const {richText, align, className} = props;
    const {projectId, dataset} = client.config();
    const innerClass = className ? `${className} ${styles.inner}` : `${styles.default} ${styles.inner}`;

    const serializers = {
        marks: {
          button_link: ({mark, children}) => {
            const {style} = mark;
            const href = mark.internalLink ? mark.internalLink : mark.externalUrl;
            if(style){
                return <Button link={mark} type={style} title={children[0]} />
            }else{
                let linkProps = {href: href};  
                if(mark.externalUrl){
                    linkProps.target = "_blank";
                    linkProps.rel="noopener";
                }
                return <a {...linkProps}>{children}</a>
            }
          },
        },
        types: {
            image: (props) => {
                const imageProps = useNextSanityImage(client, props.node);
                const alt = props.node.alt ? props.node.alt : ""; 

                if(props.node.link){
                    return  (
                        <Link link={props.node.link}>
                            <img src={imageProps.src} alt={alt} />
                        </Link>
                    )
                }else{
                    return <img src={imageProps.src} alt={alt} />
                }
            },
            block: (props) => {
                if(props.node.style == 'caption'){
                    return <p className={styles.caption}>{props.children}</p>
                }
                return BlockContent.defaultSerializers.types.block(props)
            },
            embed: (props) => {
                return <p className={styles.embed} dangerouslySetInnerHTML={{__html: props.node.code}}></p>
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
    richText: PropTypes.array.isRequired,
}

export default richText;