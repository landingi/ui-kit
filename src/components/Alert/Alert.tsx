import { Icon } from '@components/Icon'
import { mapIconToClass } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Alert.module.scss'

export interface AlertProps {
  children: ReactNode
  className?: string | string[]
  type?: 'info' | 'success' | 'warning' | 'alert'
  customIcon?: string
  hideIcon?: boolean
  oneSideMessagePadding?: boolean
}

export const Alert: FC<AlertProps> = ({
  children,
  className = '',
  type = 'info',
  customIcon,
  hideIcon = false,
  oneSideMessagePadding = false
}) => {
  const alertStyles = useStyles(
    {
      [styles['alert-message']]: true,
      [styles[`alert-message--${type}`]]: type
    },
    className
  )

  const messageStyles = useStyles({
    [styles.alert__message]: true,
    [styles['alert__message--one-side-padding']]: oneSideMessagePadding
  })

  return (
    <div data-testid='alert' className={alertStyles}>
      {hideIcon ? null : (
        <Icon
          icon={customIcon || mapIconToClass(type)}
          color={type}
          size={12}
          data-testid='alert-icon'
        />
      )}

      <div className={messageStyles}>{children}</div>
    </div>
  )
}

Alert.displayName = 'Alert'
