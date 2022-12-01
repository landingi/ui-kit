import Tooltip from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment, ReactNode, useRef } from 'react'

import styles from './Badge.module.scss'

interface BadgeProps {
  children: ReactNode
  className?: string | string[]
  type?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'alert'
    | 'pending'
    | 'success'
    | 'info'
    | 'indicator'
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
  tooltip?: ReactNode
  isIndicator?: boolean
}

export const Badge: FC<BadgeProps> = ({
  children,
  className = '',
  type = 'primary',
  tooltip = null,
  isIndicator = false
}) => {
  const badgeRef = useRef<HTMLSpanElement>(null)
  const width = badgeRef.current ? badgeRef.current.offsetWidth : 0

  const badgeStyles = useStyles(
    {
      [styles.badge]: true,
      [styles[`badge--${type}`]]: type,
      [styles['badge--indicator']]: isIndicator
    },
    className
  )

  const tooltipStyles = useStyles({
    [styles.badge__tooltip]: tooltip
  })

  return (
    <Fragment>
      {/* @ts-ignore */}
      <Tooltip content={tooltip} disabled={!tooltip || width < 105}>
        <span data-testid='badge' ref={badgeRef} className={badgeStyles}>
          <span className={tooltipStyles}>{children}</span>
        </span>
      </Tooltip>
    </Fragment>
  )
}

Badge.displayName = 'Badge'
