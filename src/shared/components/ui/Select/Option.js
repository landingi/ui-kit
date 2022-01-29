import PropTypes from 'prop-types'
import React from 'react'

//TODO Select => Option css
/**
 * Select option - stateless presentational component
 * @param {object} props - props
 * @param {string} props.className - list of class names, default: select__option
 * @param {string|number} props.value - click handler
 * @param {string} props.label
 * @return {object} An object of children element
 */

const Option = ({ className, value, label }) => (
  <option className={className} value={value}>
    {label}
  </option>
)

Option.displayName = 'select.option'

Option.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

Option.defaultProps = {
  className: 'select__option'
}

export default Option
