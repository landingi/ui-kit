import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scss from './Spinner.scss'

const cssClass = styles(scss)

/**
 * Spinner - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `spinner__spin`
 * @return {object} An object of children element
 */
const spinner = ({ className }) => (
  <div className={cssClass(className)}>
    <FontAwesomeIcon icon="spinner"
spin />
  </div>
)

/**
 * Display name
 * @type {string}
 */
spinner.displayName = 'Spinner'

/**
 * The properties.
 * @type {Object}
 */
spinner.propTypes = {
  /**
   * Classname, default `spinner__spin`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
spinner.defaultProps = {
  className: 'spinner__spin'
}

export default spinner
