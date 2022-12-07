import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEventHandler, ReactNode } from 'react'

import styles from './Indicator.module.scss'

interface IndicatorProps {
  children: ReactNode
  className?: string | string[]
  content?: string
  isAlert?: boolean
  onClick?: MouseEventHandler<HTMLSpanElement>
}

export const Indicator: FC<IndicatorProps> = ({
  children,
  className = '',
  content,
  isAlert = false,
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
      [styles['indicator__element--isAlert']]: isAlert
    },
    className
  )

  return (
    <span className={elementStyles} onClick={onClick}>
      <span className={indicatorStyles}>{content}</span>

      {children}
    </span>
  )
}

Indicator.displayName = 'Indicator'
