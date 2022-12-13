import type { HeaderProps, ItemBase } from '../../types'
import styles from './Header.module.scss'

export const Header = <Item extends ItemBase>({
  columns
}: HeaderProps<Item>) => (
  <thead>
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
