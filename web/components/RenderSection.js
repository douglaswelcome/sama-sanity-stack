import React from 'react'
import PropTypes from 'prop-types'
import * as SectionModules from '../modules'

function resolveModule (module) {
  const moduleName = module._type;
  const section = SectionModules[moduleName];

  if (section) {
    return section
  }

  return null
}

function RenderSection (props) {
  let {modules, background_color} = props;
  const className = background_color ? `umoja-l-grid-section ${background_color}` : "umoja-l-grid-section";

  return (
    <section className={className}>
      {modules &&
        modules.map(module => {
          const SectionComponent = resolveModule(module)
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
