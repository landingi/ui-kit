import type { BodyProps, ItemBase } from '../../types'
import { BodyTr } from './BodyTr'

export const Body = <Item extends ItemBase>({
  data,
  columns,
  rowActions
}: BodyProps<Item>) => (
  <tbody>
    {data.map(item => (
      <BodyTr
        columns={columns}
        item={item}
        rowActions={rowActions}
        key={item.identifier}
      />
    ))}
  </tbody>
)
