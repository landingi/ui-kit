import Close from '@components/Close'
import Icon from '@components/Icon'
import { mapIconToClass } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Notification.module.scss'

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
}) => {
  const elementStyles = useStyles(
    {
      [styles.notification]: true,
      [styles[`notification--${type}`]]: type
    },
    className
  )

  return (
    <div className={elementStyles} data-testid='notification'>
      <div className={styles.content}>
        <Icon
          icon={mapIconToClass(type) || 'icon-ok'}
          iconColor='white'
          data-testid='notification-icon'
        />

        <p className={styles.notification__message}>{children}</p>

        {isClosable && <Close onClick={onClick} iconColor='white' />}
      </div>

      {hasTime && (
        <span className={styles.time} data-testid='notification-time' />
      )}
    </div>
  )
}

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
