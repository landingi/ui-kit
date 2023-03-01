import { formatNumeric } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './LimitSmall.module.scss'

export interface LimitSmallProps {
  className?: string | string[]
  padding?: 'none' | 'tiny' | 'small' | 'medium'
  limit: number
  quantity: number
  limitText: string
}

export const LimitSmall: FC<LimitSmallProps> = ({
  className = '',
  padding = 'none',
  limit,
  quantity,
  limitText
}) => {
  const limitSmallStyles = useStyles(
    {
      [styles.result__dropdown]: true,
      [styles[`padding__${padding}`]]: padding
    },
    className
  )

  return (
    <div className={limitSmallStyles}>
      <span>{limitText}</span>

      <span>
        <b>{formatNumeric(quantity)}</b>

        {limit === -1 ? <span> / &#8734;</span> : ` / ${formatNumeric(limit)}`}
      </span>
    </div>
  )
}

LimitSmall.displayName = 'LimitSmall'
