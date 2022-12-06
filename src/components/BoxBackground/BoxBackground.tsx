import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './BoxBackground.module.scss'

interface BoxBackgroundProps {
  className?: string | string[]
  children: ReactNode
  variant: 'success' | 'warning' | 'alert' | 'progress' | 'info'
}

export const BoxBackground: FC<BoxBackgroundProps> = ({
  className = '',
  children,
  variant
}) => {
  const elementClasses = useStyles(
    {
      [styles.boxBackground]: true,
      [styles[`boxBackground--${variant}`]]: variant
    },
    className
  )

  return (
    <span data-testid='box-background' className={elementClasses}>
      {children}
    </span>
  )
}

BoxBackground.displayName = 'BoxBackground'
