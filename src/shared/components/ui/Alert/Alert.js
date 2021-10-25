import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Alert.scss'

const cssClass = styles(scss)

/**
 * Alert - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `alert-message`
 * @param {string} props.type - type of alert message `info, success, warning, alert`
 * @return {object} An object of children element
 */
const Alert = ({ children, className, type }) => {
  const icon =
    type === 'success'
      ? 'check'
      : type === 'warning'
      ? 'exclamation'
      : type === 'alert'
      ? 'exclamation-triangle'
      : 'info'

  return (
    <div className={cssClass(className, `alert-message--${type}`)}>
      <FontAwesomeIcon icon={icon} size='xs' />

      <div className={scss.alert__message}>{children}</div>
    </div>
  )
}

Alert.displayName = 'Alert'

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string
}

Alert.defaultProps = {
  className: 'alert-message',
  type: 'info'
}

export default Alert
