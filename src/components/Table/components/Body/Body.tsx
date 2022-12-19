import type { BodyProps, ItemBase } from '@components/Table/types'

import { BodyTr } from './BodyTr'

export const Body = <Item extends ItemBase>({
  data,
  columns,
  rowActions,
  hasSelect,
  isSelected,
  select
}: BodyProps<Item>) => (
  <tbody>
    {data.map(item => (
      <BodyTr
        columns={columns}
        item={item}
        rowActions={rowActions}
        key={item.identifier}
        hasSelect={hasSelect}
        isSelected={isSelected}
        select={select}
      />
    ))}
  </tbody>
)
