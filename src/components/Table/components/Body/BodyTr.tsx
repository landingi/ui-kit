import { Checkbox } from '@components/Checkbox'
import type {
  BodyTrProps,
  ColumnAccessor,
  CustomColumn,
  ItemBase
} from '@components/Table/types'
import { ReactNode } from 'react'

import styles from './Body.module.scss'
import { RowActions } from './RowActions'

export const BodyTr = <Item extends ItemBase>({
  columns,
  item,
  rowActions,
  hasSelect,
  isSelected,
  select,
  handleRefresh
}: BodyTrProps<Item>) => {
  const gridTemplateColumns = hasSelect
    ? `65px 1fr`
    : columns.reduce((acc, { width }) => `${acc} ${width || '1fr'}`, '')

  return (
    <div className={styles.tr} style={{ gridTemplateColumns }}>
      {hasSelect && (
        <div className={styles.td}>
          <Checkbox
            checked={isSelected(item.identifier)}
            onChange={() => select(item.identifier)}
            table
          />
        </div>
      )}

      {columns.map(column => {
        if ((column as ColumnAccessor<Item>).accessor) {
          return (
            <div
              className={styles.td}
              key={column.identifier}
              style={{ width: column.width }}
            >
              {item[(column as ColumnAccessor<Item>).accessor] as ReactNode}
            </div>
          )
        }

        return (
          <div
            className={styles.td}
            key={column.identifier}
            style={{ width: column.width }}
          >
            {(column as CustomColumn<Item>).render(item, handleRefresh)}
          </div>
        )
      })}

      {rowActions && <RowActions>{rowActions(item, handleRefresh)}</RowActions>}
    </div>
  )
}
