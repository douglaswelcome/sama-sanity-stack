import React, { useEffect, useRef, useState } from 'react';
import ReactMapGL, {Marker, FlyToInterpolator} from "react-map-gl";
import PropTypes from 'prop-types'
import styles from './bodymove-map.module.scss'

const bodymove_map = (props) => {
    const {title} = props;
    const [viewport, setViewport] = useState({});
    var data = [
        {
            coordinates: {
                longitude: -122.419532,
                latitude: 37.764734
            },
            properties: {
                city: "San Francisco",
                title: "HQ",
                FTE: "43"
            }
        },
        {
            coordinates: {
                longitude: -83.9874039433637,
                latitude: 9.906011565912822
            },
            properties: {
                city: "San Jose",
                title: "R&D",
                FTE: "9"
            }
        },
        {
            coordinates: {
                longitude: -73.56379755158342,
                latitude: 45.50312031084303
            },
            properties: {
                city: "Montreal",
                labelPosition: "right",
                title: "R&D",
                FTE: "16"
            }
        },
        {
            coordinates: {
                longitude: 4.305060384762361,
                latitude: 52.07142235997321
            },
            properties: {
                city: "The Hague",
                labelPosition: "top-left",
                title: "Sales",
                FTE: "5"
            }
        },
        {
            coordinates: {
                longitude: 32.291478511978895,
                latitude: 2.7722345953181695
            },
            properties: {
                city: "Gulu",
                labelPosition: "top-right",
                title: "Delivery",
                FTE: "2912 (Continental Africa)"
            }
        },
        {
            coordinates: {
                longitude: 32.68958859888505,
                latitude: 0.4338761325135939
            },
            properties: {
                city: "Kampala",
                title: "Delivery",
                FTE: "2912 (Continental Africa)"
            }
        },
        {
            coordinates: {
                longitude: 36.84447621185204,
                latitude: -1.209846650427977
            },
            properties: {
                city: "Nairobi",
                labelPosition: "right",
                title: "Delivery",
                FTE: "2912 (Continental Africa)"
            }
        }
    ]
    useEffect(() => {
        const homeZoom = (window.innerWidth <= 816 ? 0 : 1.4);
        const lat = (window.innerWidth <=816 ? 27.193714 : 45.50884);
        const long = (window.innerWidth <= 816 ? -41.758265 : -73.58781);
        setViewport({
            width: '100%',
            height: 600,
            latitude: lat,
            longitude: long,
            zoom: homeZoom
        });
    })


    const goToOffice = (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-at'));
        const office = data[index];
        setViewport({
          ...viewport,
          longitude: office.coordinates.longitude,
          latitude: office.coordinates.latitude,
          zoom: 14,
          transitionDuration: 500,
          transitionInterpolator: new FlyToInterpolator(),
        });
    };

    return (
        <div className="bodymove-map umoja-l-grid--12">
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.wrapper}>
                <div className={styles.map}>
                    <ReactMapGL 
                        {...viewport}
                        attributionControl={false}
                        mapStyle='mapbox://styles/aesimpson/ckrmovdwb2j2r17lqxf2p2lw5' 
                        mapboxApiAccessToken='pk.eyJ1IjoiYWVzaW1wc29uIiwiYSI6ImNrcm1vdGM3eDd2ZTMycHBheTEwajhqcjMifQ.nHuWTNRfeQ83cdMK2qJnpw'
                        onViewportChange={nextViewport => setViewport(nextViewport)}
                    >
                    {data.map((office, i) => {
                        const {labelPosition} = office.properties;
                        return  (
                            <Marker
                                key={i}
                                latitude={office.coordinates.latitude}
                                longitude={office.coordinates.longitude}
                            >
                                <div 
                                    className={styles.marker}
                                    onClick={goToOffice}
                                    data-at={i}
                                >
                                    <p className={`${styles.marker_label} ${labelPosition ? styles[labelPosition] : ''}`}>{office.properties.city}</p>
                                </div>
                            </Marker>
                        )
                    })}
                    </ReactMapGL>
                </div>
            </div>
        </div>
    );
}

bodymove_map.propTypes = {
    title: PropTypes.string
}
  
export default bodymove_map