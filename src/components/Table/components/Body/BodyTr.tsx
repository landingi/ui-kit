import { Checkbox } from '@components/Checkbox'
import type {
  BodyTrProps,
  ColumnAccessor,
  CustomColumn,
  ItemBase
} from '@components/Table/types'
import { isSafari } from '@helpers/browser'
import { useHover } from '@helpers/hooks/useHover'
import { MutableRefObject, ReactNode, useRef } from 'react'

import styles from './Body.module.scss'
import { RowActions } from './RowActions'

export const BodyTr = <Item extends ItemBase>({
  columns,
  item,
  rowActions,
  hasSelect,
  isSelected,
  select
}: BodyTrProps<Item>) => {
  const trRef =
    useRef<HTMLTableRowElement>() as MutableRefObject<HTMLTableRowElement>

  // safari fix for height of row actions
  const [hoverProps] = useHover()

  return (
    <tr className={styles.tr} ref={trRef} {...hoverProps}>
      {hasSelect && (
        <td className={styles.td}>
          <Checkbox
            checked={isSelected(item.identifier)}
            onChange={() => select(item.identifier)}
          />
        </td>
      )}

      {columns.map(column => {
        if ((column as ColumnAccessor<Item>).accessor) {
          return (
            <td
              className={styles.td}
              key={column.identifier}
              style={{ width: column.width }}
            >
              {item[(column as ColumnAccessor<Item>).accessor] as ReactNode}
            </td>
          )
        }

        return (
          <td
            className={styles.td}
            key={column.identifier}
            style={{ width: column.width }}
          >
            {(column as CustomColumn<Item>).render(item)}
          </td>
        )
      })}

      {rowActions && (
        <RowActions
          height={isSafari ? trRef?.current?.offsetHeight : undefined}
        >
          {rowActions(item)}
        </RowActions>
      )}
    </tr>
  )
}
