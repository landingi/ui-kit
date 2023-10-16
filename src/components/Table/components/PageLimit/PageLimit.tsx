import { Select } from '@components/Select'
import { PageLimitProps } from '@components/Table/types'
import { setLocalStorage } from '@helpers/storage'
import { ChangeEvent, FC } from 'react'

import styles from './PageSize.module.scss'

const pageLimits = [
  {
    label: '10',
    value: 10
  },
  {
    label: '25',
    value: 25
  },
  {
    label: '50',
    value: 50
  },
  {
    label: '100',
    value: 100
  }
]

const customPageLimits = [
  {
    label: '10',
    value: 10
  },
  {
    label: '25',
    value: 25
  }
]

export const PageLimit: FC<PageLimitProps> = ({
  pageLimit,
  onChange,
  name,
  hasCustomPageLimit
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value || 10)

    onChange(value)

    setLocalStorage(`table-${name}-pageLimit`, String(value))
  }

  return (
    <div className={styles['page-size']}>
      {/* @ts-ignore */}
      <Select
        data={hasCustomPageLimit ? customPageLimits : pageLimits}
        onChange={handleChange}
        value={pageLimit}
        data-testid='page-limit-selector'
        /* @ts-ignore */
        name='test'
      />
    </div>
  )
}

PageLimit.displayName = 'PageLimit'
