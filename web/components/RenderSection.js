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
  const {modules} = props;
console.log(props)
  return (
    <section className="umoja-l-grid-section">
      {modules.map(module => {
        const SectionComponent = resolveModule(module)
        if (!SectionComponent) {
          return <div>Missing section {module._type}</div>
        }
        return <SectionComponent {...module} key={module._key} />
      })}
    </section>
  )
}

RenderSection.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(PropTypes.object)
    })
  )
}

export default RenderSection
