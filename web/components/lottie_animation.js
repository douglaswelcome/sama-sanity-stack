import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import lottie from "lottie-web"
import {getFile} from '@sanity/asset-utils'
import client from '../client'

const LottieAnimation = (props) => {
    const {id, type, loop, autoplay, json, style, active, inView} = props;
    const jsonPath = getFile(json, client.config());
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(active && inView){
            if(!loaded){
                lottie.loadAnimation({
                    container: document.querySelector(`#${id}`),
                    path: jsonPath.asset.url,
                    renderer: type, 
                    loop: loop,
                    autoplay: autoplay,
                })
                setLoaded(true);
            }else{
                lottie.play();
            }
        }else if(active && !inView){
            lottie.pause();
        }
    });

    return (
        <div id={id} style={style}></div>
    )
}

LottieAnimation.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    json: PropTypes.shape({
        asset: PropTypes.shape({url: PropTypes.string})
    }),
    style: PropTypes.object,
    active: PropTypes.bool,
    inView: PropTypes.bool
}

export default LottieAnimation
