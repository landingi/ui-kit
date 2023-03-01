import { formatNumeric } from '@helpers/data'
import { FC } from 'react'

import styles from './LimitQuantity.module.scss'

export interface LimitQuantityProps {
  limit: number
  quantity: number
}

export const LimitQuantity: FC<LimitQuantityProps> = ({ limit, quantity }) => (
  <div className={styles[`limit-quantity`]}>
    <span>
      {formatNumeric(quantity)}

      <span className={styles[`limit-quantity--limit`]}>
        {limit === -1 ? <span> / &#8734;</span> : ` / ${formatNumeric(limit)}`}
      </span>
    </span>
  </div>
)

LimitQuantity.displayName = 'LimitQuantity'
