import React from 'react'
import PropTypes from 'prop-types'
import { useNextSanityImage } from 'next-sanity-image';
import NextImg from 'next/image'
import client from '../client'

const Image = (props) => {
    const {src, layout, sizes, objectFit, placeholder} = props;
    const imageProps = useNextSanityImage(client, src);
    const width = (!props.width && layout != 'fill') ? imageProps.width : props.width;
    const height = (!props.height && layout != 'fill') ? imageProps.height : props.height;

    return (
        <>
        {sizes ?
            <NextImg {...imageProps} layout={layout} sizes={sizes} alt={src.alt} objectFit={objectFit} placeholder={placeholder} />
        :
            <NextImg {...imageProps} layout={layout} width={width} height={height} alt={src.alt} objectFit={objectFit} placeholder={placeholder}/>
        }
        </>
    )
}

Image.propTypes = {
    layout: PropTypes.string,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    sizes: PropTypes.string,
    src: PropTypes.object.isRequired,
    objectFit: PropTypes.string,
    placeholder: PropTypes.string
}

export default Image;