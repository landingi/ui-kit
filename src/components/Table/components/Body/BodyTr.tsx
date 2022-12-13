import { isSafari } from '@helpers/browser'
import { useHover } from '@helpers/hooks/useHover'
import { useStyles } from '@helpers/hooks/useStyles'
import { MutableRefObject, ReactNode, useRef } from 'react'

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

  const trRowActionsStyles = useStyles({
    [styles['tr__row-actions']]: true,
    // special fix ONLY for safari
    [styles['tr__row-actions--safari']]: isSafari
  })

  const trRef =
    useRef<HTMLTableRowElement>() as MutableRefObject<HTMLTableRowElement>

  const renderRowActions = trRef?.current?.offsetHeight && rowActions && isHover

  return (
    <tr className={styles.tr} ref={trRef} {...hoverProps}>
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

      {renderRowActions ? (
        <div
          className={trRowActionsStyles}
          style={{
            // special fix ONLY for safari
            height: isSafari ? trRef?.current?.offsetHeight : undefined
          }}
        >
          {rowActions(item)}
        </div>
      ) : null}
    </tr>
  )
}
