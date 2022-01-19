import { mapIconToClass } from '@helpers/data'
import Close from '@components/ui/Close'
import Icon from '@components/ui/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Notification.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

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
      [styles['notification']]: true,
      [styles[`notification--${type}`]]: type
    },
    className
  )

  return (
    <div className={elementStyles}>
      <div className={styles.content}>
        <Icon icon={mapIconToClass(type) || 'icon-ok'} color='white' />

        <p className={styles.notification__message}>{children}</p>

        {isClosable && <Close onClick={onClick} color='white' />}
      </div>

      {hasTime && <span className={styles.time} />}
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
