import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Panel.module.scss'

export interface PanelProps {
  className?: string | string[]
  children: ReactNode
  variant?:
    | 'padding-default'
    | 'padding-nolr'
    | 'padding-tiny'
    | 'padding-none'
    | 'padding-bottom-tiny'
    | 'padding-input'
    | 'padding-huge'
  adjustHeight?: boolean
  isBackground?: boolean
  hasShadow?: boolean
  borderRadius?: string
  customBoxShadow?: string
}

export const Panel: FC<PanelProps> = ({
  className = '',
  children,
  variant = 'padding-default',
  adjustHeight = false,
  isBackground = false,
  hasShadow = true,
  borderRadius = undefined,
  customBoxShadow = undefined
}) => {
  const elementClasses = useStyles(
    {
      [styles.panel]: true,
      [styles['panel--adjust-height']]: adjustHeight,
      [styles['panel--background']]: isBackground,
      [styles['panel--shadow-none']]: !hasShadow,
      [styles[`panel--${variant}`]]: variant
    },
    className
  )

  return (
    <div
      className={elementClasses}
      style={{ boxShadow: customBoxShadow, borderRadius }}
    >
      {children}
    </div>
  )
}

Panel.displayName = 'Panel'
