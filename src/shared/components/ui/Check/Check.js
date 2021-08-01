import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import scss from './Check.scss'
import Spreader from '@components/ui/Spreader'

const cssClass = styles(scss)

/**
 * Check - stateless presentational component
 * @param {object} props - props
 * @param {bool} positive - positive
 * @param {object} children - children
 * @return {object} An object of children element
 */
const check = ({ children, positive }) => (
  <span
    className={cssClass(
      'check',
      positive && 'check--positive'
    )}
  >
    <FontAwesomeIcon icon={positive ? 'check' : 'times'} />

    <Spreader spread="tiny" />

    {children}
  </span>
)

/**
 * Display name
 * @type {string}
 */
check.displayName = 'Check'

/**
 * The properties.
 * @type {Object}
 */
check.propTypes = {
  /**
   * positive
   */
  positive: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
check.defaultProps = {
  positive: false
}

export default check
