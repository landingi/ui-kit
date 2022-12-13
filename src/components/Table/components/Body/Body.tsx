import { ReactNode } from 'react'

import type {
  BodyProps,
  ColumnAccessor,
  CustomColumn,
  ItemBase
} from '../../types'
import styles from './Body.module.scss'

export const Body = <Item extends ItemBase>({
  data,
  columns
}: BodyProps<Item>) => (
  <tbody className={styles.body}>
    {data.map(item => {
      return (
        <tr className={styles.tr} key={item.identifier}>
          {columns.map(column => {
            if ((column as ColumnAccessor<Item>).accessor) {
              return (
                <td className={styles.td} key={column.identifier}>
                  {item[(column as ColumnAccessor<Item>).accessor] as ReactNode}
                </td>
              )
            }

            return (
              <td className={styles.td} key={column.identifier}>
                {(column as CustomColumn<Item>).render(item)}
              </td>
            )
          })}
        </tr>
      )
    })}
  </tbody>
)
