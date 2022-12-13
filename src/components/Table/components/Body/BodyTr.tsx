import { useHover } from '@helpers/hooks/useHover'
import { ReactNode } from 'react'

import type {
  ColumnAccessor,
  CustomColumn,
  ItemBase,
  TrProps
} from '../../types'
import styles from './Body.module.scss'

export const BodyTr = <Item extends ItemBase>({
  columns,
  item,
  rowActions
}: TrProps<Item>) => {
  const [hoverProps, isHover] = useHover()

  return (
    <tr className={styles.tr} {...hoverProps}>
      {rowActions && isHover && (
        <div className={styles['tr__row-actions-wrapper']}>
          <div className={styles['tr__row-actions']}>{rowActions(item)}</div>
        </div>
      )}

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
