import React from 'react'
import PropTypes from 'prop-types'
import {getFile} from '@sanity/asset-utils'
import client from '../../client'
import styles from './bodystatic-vidCenter.module.scss'

const bodystatic_vidCenter = (props) => {
    const {video} = props;
    const videoPath = getFile(video, client.config());

    return (
        <div className="bodystatic-vidCenter container-lg umoja-l-grid--12">
            <div className={styles.videoWrapper}>
                <video 
                    className={styles.video} 
                    autoPlay="autoplay" 
                    loop="loop" 
                    playsInline="playsinline" 
                    muted={true}
                >
                    <source
                        src={videoPath.asset.url}
                        type={`video/${videoPath.asset.extension}`}
                    />
                </video>
            </div>

        </div>
    )
}

bodystatic_vidCenter.propTypes = {
    video: PropTypes.object
}
  
  export default bodystatic_vidCenter