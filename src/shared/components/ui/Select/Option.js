import PropTypes from 'prop-types'
import React from 'react'

/**
 * Select option - stateless presentational component
 * @param {object} props - props
 * @param {string} props.className - list of class names, default: select__option
 * @param {string|number} props.value - click handler
 * @param {string} props.label - children
 * @return {object} An object of children element
 */

const option = ({ className, value, label }) => (
  <option className={className} value={value}>
    {label}
  </option>
)

/**
 * Display name
 * @type {string}
 */
option.displayName = 'select.option'

/**
 * The properties.
 * @type {Object}
 */
option.propTypes = {
  /**
   * Classname, default `select__option`
   */
  className: PropTypes.string,

  /**
   * Label
   */
  label: PropTypes.string.isRequired,

  /**
   * Value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}
/**
 * The default properties.
 * @type {Object}
 */
option.defaultProps = {
  className: 'select__option'
}

export default option
