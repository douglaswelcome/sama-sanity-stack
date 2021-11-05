import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {getFile} from '@sanity/asset-utils'
import client from '../client'
import NextLink from 'next/link'


const Link = (props) => {
    const {link, className, children} = props;
    const [linkUrl, setUrl] = useState(link);

    useEffect(() => {
        if(link && link.internalLink){
            client.fetch(`*[_type == "page" && _id == "${link.internalLink._ref}"][0]`)
            .then(page => {
                setUrl(page.slug.current);
            })
        }
        if(link && link.externalUrl){
            setUrl(link.externalUrl);
        }
        if(link && link.file){
            const filePath = getFile(link.file, client.config());
            setUrl(filePath.asset.url);
        }
    });

    if(linkUrl){
        return (
            <>
            {link.internalLink ?
                <NextLink href={`/${linkUrl}`}>
                    <a className={className}>
                        {children}
                    </a>
                </NextLink>
                :
                <a 
                    href={linkUrl}
                    target="_blank"
                    rel="noopener"
                    className={className}
                >
                    {children}
                </a>
            }
            </>
        )
    }

}


Link.propTypes ={
    link: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
}

export default Link