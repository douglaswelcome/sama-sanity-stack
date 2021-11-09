import PropTypes from 'prop-types'
import styles from './event.module.scss'

const Event = (props) => {
    const {datetime, time_zone, type, location, name, lightMode} = props;
    let date = new Date(datetime);
    date = date.toLocaleString('en-US', {
        day: 'numeric',
        year: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
    });
    let catClass = 'category__sunshine';
    switch (type){
        case 'Conference':
            catClass = 'category__greenBlue'
            break;
        case 'Webinar':
            catClass = 'category__blue'
            break;
    }
    return(
        <div className={`${styles.event} ${lightMode ? styles.event__light : ''}`}>
            <div className={`${styles.category} ${styles[catClass]}`}>
                <p className={styles.category_name}>{type}</p>
            </div>
            <h4>{name}</h4>
            <div className="divider-line divider-line--horizontal"></div>
            <p className={styles.date}>
                {`${date} ${time_zone ? time_zone : ''}`}
                <br />
                {location}
            </p>
        </div>
    )
}

Event.propTypes ={
    datetime: PropTypes.string,
    time_zone: PropTypes.string,
    type: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    lightMode: PropTypes.bool
}

export default Event