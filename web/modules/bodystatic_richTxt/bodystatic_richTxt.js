import React from 'react'
import PropTypes from 'prop-types'
import RichText from '../../components/richText_field/richText_field'

const bodystatic_richTxt = (props) => {
    const {align, richText} = props;

    return (
        <div className="bodystatic_richTxt umoja-l-grid--12">
            <RichText richText={richText} align={align} />
        </div>
    )
}

bodystatic_richTxt.propTypes = {
    align: PropTypes.string,
    richText: PropTypes.arrayOf(PropTypes.object)
}

export default bodystatic_richTxt;