import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mapIconToClass } from '@helpers/data'
import { styles } from '@helpers/css'
import Close from '@components/ui/Close'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Notification.scss'

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
const Notification = ({
  children,
  className,
  type,
  isClosable,
  onClick,
  hasTime
}) => (
  <div className={cssClass(className, `notification--${type}`)}>
    <div className={scss.content}>
      <FontAwesomeIcon icon={mapIconToClass(type) || 'check'} size='sm' />

      <p className={scss.notification__message}>{children}</p>

      {isClosable && <Close onClick={onClick} />}
    </div>

    {hasTime && <span className={scss.time} />}
  </div>
)

Notification.displayName = 'Notification'

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  hasTime: PropTypes.bool,
  isClosable: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'alert'])
}

Notification.defaultProps = {
  className: 'notification',
  type: 'info',
  hasTime: false,
  isClosable: false,
  onClick: () => null
}

export default Notification
