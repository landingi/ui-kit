import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scss from './Alert.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Alert - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `alert-message`
 * @param {string} props.type - type of alert message `info, success, warning, alert`
 * @return {object} An object of children element
 */

const alert = ({ children, className, type }) => {
  const icon =
    type === 'success'
      ? 'check'
      : type === 'warning'
      ? 'exclamation'
      : type === 'alert'
      ? 'exclamation-triangle'
      : 'info'

  return (
    <div
      className={cssClass(
        className,
        `alert-message--${type}`
      )}
    >
      <FontAwesomeIcon icon={icon} size="xs" />

      <div className={scss.alert__message}>{children}</div>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
alert.displayName = 'Alert'

/**
 * The properties.
 * @type {Object}
 */
alert.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  /**
   * Classname, default `alert-message`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * type of notification `info, success, warning, alert`
   */
  type: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
alert.defaultProps = {
  className: 'alert-message',
  type: 'info'
}

export default alert
