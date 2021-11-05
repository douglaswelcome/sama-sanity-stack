import React from 'react'
import PropTypes from 'prop-types'
import RichText from '../../components/richText_field/richText_field'

const bodystatic_richTxt = (props) => {
    const {richText, align} = props.richText;

    return (
        <div className="bodystatic_richTxt umoja-l-grid--12">
            <RichText richText={richText} align={align} />
        </div>
    )
}

bodystatic_richTxt.propTypes = {
    richText: PropTypes.shape({
        align: PropTypes.string,
        richText: PropTypes.array
    })
}

export default bodystatic_richTxt;