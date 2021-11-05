import React, { useEffect, useState } from 'react';
import ReactMapGL, {Marker, FlyToInterpolator, Popup, NavigationControl} from "react-map-gl";
import RichText from '../../components/richText_field/richText_field'
import PropTypes from 'prop-types'
import '../../node_modules/mapbox-gl/dist/mapbox-gl.css'
import styles from './bodymove-sfMap.module.scss'

const bodymove_sfMap = (props) => {
    const {title, address} = props;
    const [viewport, setViewport] = useState(null);
    const [showPopup, togglePopup] = useState(false);
    const navControlStyle= {
        right: 15,
        top: 10,
    };
    var data = [
        {
            coordinates: {
                longitude: -122.419532,
                latitude: 37.764734
            }
        }
    ]
    useEffect(() => {
        if(viewport == null){
            setViewport({
                width: '100%',
                height: 470,
                latitude: 37.764734,
                longitude: -122.419532,
                zoom: 11.5
            });
        }
    });

    const goToOffice = (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-at'));
        const office = data[index];
        setViewport({
          ...viewport,
          longitude: office.coordinates.longitude,
          latitude: office.coordinates.latitude,
          zoom: 11.5,
          transitionDuration: 500,
          transitionInterpolator: new FlyToInterpolator(),
        });
    };

    const showWorld = () => {
        setViewport({
            ...viewport,
            longitude: -24.547817,
            latitude: 36.980944,
            zoom: 1,
            transitionDuration: 1000,
            transitionInterpolator: new FlyToInterpolator(),
        });
    }

    const handlePopUp = (e) => {
        goToOffice(e)
        togglePopup(!showPopup)
    };

    return (
        <div className={`bodymove-sfMap umoja-l-grid--12 ${styles.panel}`}>
            <div className={styles.address}>
                <h3 className={styles.title}>{title}</h3>
                <RichText className={styles.body} richText={address.richText} />
            </div>
            <div className={styles.map}>
                <ReactMapGL 
                    {...viewport}
                    attributionControl={false}
                    mapStyle='mapbox://styles/dwelcome/ckfxhibcm08vf1aoaxw0c2nj5' 
                    mapboxApiAccessToken='pk.eyJ1IjoiZHdlbGNvbWUiLCJhIjoiY2p6MXNkdmZiMGF3OTNibzFoMm1ocG05cSJ9.xZ8njmOGIVM4sLRiit4xdg'
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                >
                <NavigationControl showCompass={false} style={navControlStyle} />
                {showPopup && 
                    <Popup
                        latitude={37.7816218704741}
                        longitude={-122.414532}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => togglePopup(false)}
                        anchor="top" 
                        className={styles.marker_popup}
                    >
                        <p className={styles.marker_popup_city}>Sama HQ</p>
                        <p>San Francisco, CA</p>
                    </Popup>
                }
                {data.map((office, i) => {
                    return  (
                        <Marker
                            key={i}
                            latitude={office.coordinates.latitude}
                            longitude={office.coordinates.longitude}
                        >
                            <div 
                                className={styles.marker}
                                onClick={handlePopUp}
                                data-at={i}
                            >
                                <p className={styles.marker_label}></p>
                            </div>
                        </Marker>
                    )
                })}
                    <button
                        className={styles.globe}
                        onClick={showWorld}
                    >
                    </button>
                </ReactMapGL>
            </div>
        </div>
    );
}

bodymove_sfMap.propTypes = {
    title: PropTypes.string,
    address: PropTypes.object
}
  
export default bodymove_sfMap