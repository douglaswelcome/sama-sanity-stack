import React from 'react'
import PropTypes from 'prop-types'
import {getFile} from '@sanity/asset-utils'
import client from '../../client'
import styles from './bodystatic-videoDivide.module.scss'

const bodystatic_videoDivide = (props) => {
    const {video} = props;
    const videoPath = getFile(video, client.config());

    return (
        <div className="bodystatic-videoDivide umoja-l-grid--12">
            <div className={styles.videoWrapper}>
                <video 
                    className={styles.video} 
                    autoPlay="autoplay" 
                    loop="loop" 
                    playsInline="playsinline" 
                    muted="true" 
                >
                    <source
                        src={videoPath.asset.url}
                        type={`video/${videoPath.asset.extension}`}
                    />
                </video>
            </div>
            <div className={styles.bg1}></div>
            <div className={styles.bg2}></div>
        </div>
    )
}

bodystatic_videoDivide.propTypes = {
    video: PropTypes.object
}
  
  export default bodystatic_videoDivide