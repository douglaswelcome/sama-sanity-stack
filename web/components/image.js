import React from 'react'
import PropTypes from 'prop-types'
import { useNextSanityImage } from 'next-sanity-image';
import NextImg from 'next/image'
import client from '../client'

const Image = (props) => {
    const {src, layout, width, height, sizes, className} = props;

    const imageProps = useNextSanityImage(client, src);

    return (
        <>
        {sizes ?
            <NextImg {...imageProps} layout={layout} sizes={sizes} alt={src.alt} />
        :
            <NextImg {...imageProps} layout={layout} width={width} height={height} alt={src.alt} />
        }
        </>
    )
}

Image.propTypes = {
    layout: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    sizes: PropTypes.string,
    src: PropTypes.object.isRequired,
    className: PropTypes.object
}

export default Image;