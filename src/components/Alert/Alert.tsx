import { Icon } from '@components/Icon'
import { mapIconToClass } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Alert.module.scss'

export interface AlertProps {
  children: ReactNode
  className?: string | string[]
  type?: 'info' | 'success' | 'warning' | 'alert'
}

export const Alert: FC<AlertProps> = ({
  children,
  className = '',
  type = 'info'
}) => {
  const alertStyles = useStyles(
    {
      [styles['alert-message']]: true,
      [styles[`alert-message--${type}`]]: type
    },
    className
  )

  return (
    <div data-testid='alert' className={alertStyles}>
      <Icon icon={mapIconToClass(type)} color={type} data-testid='alert-icon' />

      <div className={styles.alert__message}>{children}</div>
    </div>
  )
}

Alert.displayName = 'Alert'
