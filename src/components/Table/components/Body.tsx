import { ReactNode } from 'react'

import type {
  BodyProps,
  ColumnAccessor,
  CustomColumn,
  ItemBase
} from '../types'

export const Body = <Item extends ItemBase>({
  data,
  columns
}: BodyProps<Item>) => (
  <tbody>
    {data.map(item => {
      return (
        <tr key={item.identifier}>
          {columns.map(column => {
            if ((column as ColumnAccessor<Item>).accessor) {
              return (
                <td key={column.identifier}>
                  {item[(column as ColumnAccessor<Item>).accessor] as ReactNode}
                </td>
              )
            }

            return (
              <td key={column.identifier}>
                {(column as CustomColumn<Item>).render(item)}
              </td>
            )
          })}
        </tr>
      )
    })}
  </tbody>
)
