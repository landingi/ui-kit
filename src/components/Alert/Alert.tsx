import { Icon } from '@components/Icon'
import { mapIconToClass } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Alert.module.scss'

export interface AlertProps {
  children: ReactNode
  className?: string | string[]
  type?: 'info' | 'success' | 'warning' | 'alert'
  customIcon?: string | 'no-icon'
}

export const Alert: FC<AlertProps> = ({
  children,
  className = '',
  type = 'info',
  customIcon
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
      {customIcon === 'no-icon' ? null : (
        <Icon
          icon={customIcon || mapIconToClass(type)}
          color={type}
          size={12}
          data-testid='alert-icon'
        />
      )}

      <div className={styles.alert__message}>{children}</div>
    </div>
  )
}

Alert.displayName = 'Alert'
