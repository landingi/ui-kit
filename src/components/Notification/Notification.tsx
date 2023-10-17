import { Close } from '@components/Close'
import { Icon } from '@components/Icon'
import { mapIconToClass } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEventHandler } from 'react'

import styles from './Notification.module.scss'

export interface NotificationProps {
  children: React.ReactNode
  className?: string | string[]
  hasTime?: boolean
  type?: 'info' | 'success' | 'warning' | 'alert'
  isClosable?: boolean
  onClick?: MouseEventHandler<HTMLSpanElement>
}

export const Notification: FC<NotificationProps> = ({
  children,
  className,
  type = 'info',
  isClosable = false,
  onClick,
  hasTime = false
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
          color='white'
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
