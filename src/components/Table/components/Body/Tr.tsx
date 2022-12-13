import { useHover } from '@helpers/hooks/useHover'
import { ReactNode } from 'react'

import type {
  ColumnAccessor,
  CustomColumn,
  ItemBase,
  TrProps
} from '../../types'
import styles from './Body.module.scss'

export const Tr = <Item extends ItemBase>({ columns, item }: TrProps<Item>) => {
  const [hoverProps, isHover] = useHover()

  if (isHover) {
    console.log('@@@@', item.identifier)
  }

  return (
    <tr className={styles.tr} key={item.identifier} {...hoverProps}>
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
}
