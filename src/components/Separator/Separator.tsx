import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Separator.module.scss'

export interface SeparatorProps {
  className?: string | string[]
  children: ReactNode
  size?: 'medium'
  color?: 'color-4'
}

export const Separator: FC<SeparatorProps> = ({
  className,
  children,
  size = 'medium',
  color = 'color-4'
}) => {
  const elementClasses = useStyles(
    {
      [styles.separator__divider]: true,
      [styles[`separator__divider--${size}`]]: size,
      [styles[`separator__divider--${color}`]]: color
    },
    className
  )

  return (
    <div className={styles.separator}>
      <div className={elementClasses} />

      <Spreader spread='tiny' />

      {children}

      <Spreader spread='tiny' />

      <div className={elementClasses} />
    </div>
  )
}

Separator.displayName = 'Separator'
