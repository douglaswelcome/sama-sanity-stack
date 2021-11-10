import React from 'react'
import PropTypes from 'prop-types'
import dynamic from "next/dynamic";

function RenderSection (props) {
  let {modules, background_color} = props;
  const className = background_color ? `umoja-l-grid-section ${background_color}` : "umoja-l-grid-section";

  return (
    <section className={className}>
      {modules &&
        modules.map(module => {
          const SectionComponent  = dynamic(() => import(`../modules/${module._type}/${module._type}.js`))

          if (!SectionComponent) {
            return <div key={module._key}>Missing section {module._type}</div>
          }
          return <SectionComponent {...module} key={module._key} />
        })
      }
    </section>
  )
}

RenderSection.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
    })
  ),
  background_color: PropTypes.string
}

export default RenderSection