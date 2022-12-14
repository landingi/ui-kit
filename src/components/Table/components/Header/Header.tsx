import Checkbox from '@components/Checkbox'

import type { HeaderProps, ItemBase } from '../../types'
import styles from './Header.module.scss'

export const Header = <Item extends ItemBase>({
  columns,
  selectOptions,
  selectAll,
  isSelectedAll,
  isSelectedAny,
  selected
}: HeaderProps<Item>) => {
  const optionsAriaColspan = columns.length - 1

  const columnsMap = columns.map(({ header, identifier }) => {
    return (
      <th className={styles.th} key={identifier}>
        {header}
      </th>
    )
  })

  if (selectOptions) {
    return (
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th} aria-colspan={1}>
            {/*
          // @ts-ignore */}
            <Checkbox checked={isSelectedAll} onChange={selectAll} />
          </th>

          {isSelectedAny && (
            <th className={styles.th} aria-colspan={optionsAriaColspan}>
              {selectOptions(selected)}
            </th>
          )}

          {!isSelectedAny && columnsMap}
        </tr>
      </thead>
    )
  }

  return (
    <thead className={styles.thead}>
      <tr>{columnsMap}</tr>
    </thead>
  )
}
