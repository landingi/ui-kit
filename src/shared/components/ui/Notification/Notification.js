import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scss from './Notification.scss'
import Close from 'shared/components/ui/Close'
import { mapIconToClass } from 'shared/helpers/data'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Notification - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `notification`
 * @param {string} props.type - type of notification `info, success, warning, alert`
 * @param {bool} props.isClosable - show close
 * @param {bool} props.onClick - gets called when the user clicks on backdrop
 * @param {bool} props.hasTime - hasTime
 * @return {object} An object of children element
 */
const notification = ({
  children,
  className,
  type,
  isClosable,
  onClick,
  hasTime
}) => (
  <div
    className={cssClass(className, `notification--${type}`)}
  >
    <div className={scss.content}>
      <FontAwesomeIcon
        icon={mapIconToClass(type) || 'check'}
        size="sm"
      />

      <p className={scss.notification__message}>
        {children}
      </p>

      {isClosable && <Close onClick={onClick} />}
    </div>

    {hasTime && <span className={scss.time} />}
  </div>
)

/**
 * Display name
 * @type {string}
 */
notification.displayName = 'Notification'

/**
 * The properties.
 * @type {Object}
 */
notification.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  /**
   * Classname, default `notification`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   *  type of notification `info, success, warning, alert`
   */
  type: PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'alert'
  ]),
  /**
   *  isClosable
   */
  isClosable: PropTypes.bool,
  /**
   *  hasTime
   */
  hasTime: PropTypes.bool,
  /**
   * Gets called when the user clicks on backdrop
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
notification.defaultProps = {
  className: 'notification',
  type: 'info',
  isClosable: false,
  onClick: () => null,
  hasTime: false
}

export default notification
