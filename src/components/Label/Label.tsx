import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Label.module.scss'

interface LabelProps {
  children: ReactNode
  className?: string | string[]
  id?: string
  isToggle?: boolean
  toggle?: boolean
  padding?: 'default' | 'none' | 'top'
}

export const Label: FC<LabelProps> = ({
  children,
  className = '',
  id,
  isToggle = false,
  toggle = false,
  padding = 'default'
}) => {
  const labelStyles = useStyles(
    {
      [styles.label]: true,
      [styles['label--normal']]: !isToggle,
      [styles['label--active']]: isToggle && toggle,
      [styles['label--inactive']]: isToggle && !toggle,
      [styles[`label--padding--${padding}`]]: padding
    },
    className
  )

  return (
    <label className={labelStyles} htmlFor={id}>
      {children}
    </label>
  )
}

Label.displayName = 'Label'
