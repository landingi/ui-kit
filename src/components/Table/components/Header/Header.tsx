import Checkbox from '@components/Checkbox'

import type { HeaderProps, ItemBase } from '../../types'
import styles from './Header.module.scss'

export const Header = <Item extends ItemBase>({
  columns,
  selectOptions
}: HeaderProps<Item>) => {
  const optionsAriaColspan = columns.length - 1

  if (selectOptions) {
    return (
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th} aria-colspan={1}>
            {/*
          // @ts-ignore */}
            <Checkbox checked onChange={() => {}} />
          </th>

          <th className={styles.th} aria-colspan={optionsAriaColspan}>
            {selectOptions([
              '5c4de8fa-ae5d-4b5d-b15f-15a694a7da7b',
              'b44ca633-1631-4f9f-852c-f3c9ce7c25d9'
            ])}
          </th>
        </tr>
      </thead>
    )
  }

  return (
    <thead className={styles.thead}>
      <tr>
        {columns.map(({ header, identifier }) => {
          return (
            <th className={styles.th} key={identifier}>
              {header}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
