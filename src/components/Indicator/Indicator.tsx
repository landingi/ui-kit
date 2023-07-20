import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEventHandler, ReactNode } from 'react'

import styles from './Indicator.module.scss'

export interface IndicatorProps {
  children: ReactNode
  className?: string | string[]
  content?: string
  isAlert?: boolean
  variant?: 'warning' | 'alert'
  position?: {
    top?: number | string
    right?: number | string
    bottom?: number | string
    left?: number | string
  }
  onClick?: MouseEventHandler<HTMLSpanElement>
}

export const Indicator: FC<IndicatorProps> = ({
  children,
  className = '',
  content,
  isAlert = false,
  variant = 'alert',
  position = { top: 0, right: 6 },
  onClick = () => {}
}) => {
  const elementStyles = useStyles(
    {
      [styles.indicator]: true
    },
    className
  )

  const indicatorStyles = useStyles(
    {
      [styles.indicator__element]: true,
      [styles['indicator__element--isAlert']]: isAlert,
      [styles[`indicator__element--${variant}`]]: variant
    },
    className
  )

  return (
    <span className={elementStyles} onClick={onClick}>
      <span className={indicatorStyles} style={{ ...position }}>
        {content}
      </span>

      {children}
    </span>
  )
}

Indicator.displayName = 'Indicator'
