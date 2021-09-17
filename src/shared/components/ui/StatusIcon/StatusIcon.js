import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './StatusIcon.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Status Icon - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `status-icon`
 * @param {string} props.variant - variant of statusIcon active, inactive
 * @param {string} props.size - variant of statusIcon tiny, medium
 */
const statusIcon = ({ className, variant, size }) => (
  <div
    className={cssClass(
      className,
      `status-icon--${variant}`,
      `status-icon--${size}`
    )}
  >
    {variant === 'active' ? (
      <FontAwesomeIcon icon='check' size='xs' />
    ) : (
      <FontAwesomeIcon icon='times' size='xs' />
    )}
  </div>
)

/**
 * Display name
 * @type {string}
 */
statusIcon.displayName = 'Status Icon'

/**
 * The properties.
 * @type {Object}
 */
statusIcon.propTypes = {
  /**
   * Classname, default `status-icon`
   */
  className: PropTypes.string,
  /**
   * Variant, default 'active'
   */
  variant: PropTypes.oneOf(['active', 'inactive']),
  /**
   * Size, default 'medium'
   */
  size: PropTypes.oneOf(['tiny', 'medium'])
}

/**
 * The default properties.
 * @type {Object}
 */
statusIcon.defaultProps = {
  className: 'status-icon',
  variant: 'active',
  size: 'medium'
}

export default statusIcon
