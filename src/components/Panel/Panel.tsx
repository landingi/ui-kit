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
  borderRadius?: string
  customBoxShadow?: string
  hasBorder?: boolean
}

export const Panel: FC<PanelProps> = ({
  className = '',
  children,
  variant = 'padding-default',
  adjustHeight = false,
  isBackground = false,
  borderRadius = undefined,
  customBoxShadow = undefined,
  hasBorder = false
}) => {
  const elementClasses = useStyles(
    {
      [styles.panel]: true,
      [styles['panel--adjust-height']]: adjustHeight,
      [styles['panel--background']]: isBackground,
      [styles[`panel--${variant}`]]: variant,
      [styles[`panel--bordered`]]: hasBorder
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
