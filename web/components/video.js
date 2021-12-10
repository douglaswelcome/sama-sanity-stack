import React from 'react'
import PropTypes from 'prop-types'
import Vimeo from '@u-wave/react-vimeo'
import YouTube from '@u-wave/react-youtube'
import getYouTubeId from 'get-youtube-id'
import client from '../client'

const Video = (props) => {
    const {src, className, autoPlay, loop, playsInline, muted} = props;

    if(src.embed){
        const {type, url} = src.embed;
        if(type == 'vimeo'){
            return (
                <Vimeo
                    video={url}
                    autoplay={autoPlay}
                    loop={loop}
                    className={className}
                    muted={muted}
                    responsive={true}
                />
            )
        }else if(type == 'youtube'){
            const id = getYouTubeId(url);
            return (
                <YouTube
                    video={id}
                    autoplay={autoPlay}
                    className={className}
                    muted={muted}
                    playsInline={playsInline}
                />
            )
        }
    }
    const videoPath = getFile(video, client.config());
    return (
                <video 
                    className={className} 
                    autoPlay={autoPlay}
                    loop={loop} 
                    playsInline={playsInline}
                    muted={true}
                >
                    <source
                        src={videoPath.asset.url}
                        type={`video/${videoPath.asset.extension}`}
                    />
                </video>
        )

}

Video.propTypes ={
    src: PropTypes.object,
    video_embed: PropTypes.object,
    className: PropTypes.object,
    autoPlay: PropTypes.string,
    loop: PropTypes.string,
    playsInline: PropTypes.bool,
    muted: PropTypes.bool
}

export default Video