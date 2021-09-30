import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mapIconToClass } from '@helpers/data'
import { styles } from '@helpers/css'
import Close from '@components/ui/Close'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Notification.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
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
  notification = ({
    children,
    className,
    type,
    isClosable,
    onClick,
    hasTime
  }) => (
    <div
      className={cssClass(
        className,
        `notification--${type}`
      )}
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
   *  HasTime
   */
  hasTime: PropTypes.bool,

  /**
   *  IsClosable
   */
  isClosable: PropTypes.bool,

  /**
   * Gets called when the user clicks on backdrop
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func,

  /**
   *  Type of notification `info, success, warning, alert`
   */
  type: PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'alert'
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
notification.defaultProps = {
  className: 'notification',
  hasTime: false,
  isClosable: false,
  onClick: () => null,
  type: 'info'
}

export default notification
