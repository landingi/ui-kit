import { Tooltip } from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'

import styles from './Badge.module.scss'

export interface BadgeProps {
  children: ReactNode
  className?: string | string[]
  type?:
    | 'warning'
    | 'alert'
    | 'pending'
    | 'success'
    | 'info'
    | 'paid'
    | 'open'
    | 'canceled'
    | 'ai'
    | 'accent-1'
    | 'accent-2'
    | 'accent-3'
    | 'accent-4'
    | 'accent-5'
    | 'accent-6'
    | 'accent-7'
    | 'accent-8'
    | 'green-with-border'
    | 'info-with-border'
  tooltip?: ReactNode
  isIndicator?: boolean
  textDecoration?: string
}

export const Badge: FC<BadgeProps> = ({
  children,
  className = '',
  type = 'info',
  tooltip = null,
  isIndicator = false,
  textDecoration = 'uppercase'
}) => {
  const badgeRef = useRef<HTMLSpanElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(badgeRef.current ? badgeRef.current.offsetWidth : 0)
  }, [])

  const badgeStyles = useStyles(
    {
      [styles.badge]: true,
      [styles[`badge--${type}`]]: type,
      [styles['badge--indicator']]: isIndicator,
      [styles[`badge--${textDecoration}`]]: textDecoration
    },
    className
  )

  const tooltipStyles = useStyles({
    [styles.badge__tooltip]: tooltip
  })

  return (
    <Tooltip
      content={tooltip}
      disabled={!tooltip || width < 105}
      data-testid='badge-tooltip'
    >
      <span data-testid='badge' ref={badgeRef} className={badgeStyles}>
        <span className={tooltipStyles}>{children}</span>
      </span>
    </Tooltip>
  )
}

Badge.displayName = 'Badge'
