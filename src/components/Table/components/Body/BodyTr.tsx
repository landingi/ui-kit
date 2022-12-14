import Checkbox from '@components/Checkbox'
import { isSafari } from '@helpers/browser'
import { useHover } from '@helpers/hooks/useHover'
import { MutableRefObject, ReactNode, useRef } from 'react'

import type {
  BodyTrProps,
  ColumnAccessor,
  CustomColumn,
  ItemBase
} from '../../types'
import styles from './Body.module.scss'
import { RowActions } from './RowActions'

export const BodyTr = <Item extends ItemBase>({
  columns,
  item,
  rowActions,
  hasSelect
}: BodyTrProps<Item>) => {
  const [hoverProps, isHover] = useHover()

  const trRef =
    useRef<HTMLTableRowElement>() as MutableRefObject<HTMLTableRowElement>

  const renderRowActions = trRef?.current?.offsetHeight && rowActions && isHover

  return (
    <tr className={styles.tr} ref={trRef} {...hoverProps}>
      {hasSelect && (
        <td className={styles.td}>
          {/*
          // @ts-ignore */}
          <Checkbox checked onChange={() => {}} />
        </td>
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

      {renderRowActions && (
        <RowActions
          height={isSafari ? trRef?.current?.offsetHeight : undefined}
        >
          {rowActions(item)}
        </RowActions>
      )}
    </tr>
  )
}
