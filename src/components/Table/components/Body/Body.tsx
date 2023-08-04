import type { BodyProps, ItemBase } from '@components/Table/types'

import { BodyTr } from './BodyTr'

export const Body = <Item extends ItemBase>({
  data,
  columns,
  rowActions,
  hasSelect,
  isSelected,
  select,
  handleRefresh,
  externalBorder,
  isStyledFirstRow
}: BodyProps<Item>) => (
  <div>
    {data.map((item, index) => (
      <BodyTr
        columns={columns}
        item={item}
        rowActions={rowActions}
        key={item.identifier}
        hasSelect={hasSelect}
        isSelected={isSelected}
        select={select}
        handleRefresh={handleRefresh}
        externalBorder={externalBorder}
        isStyledFirstRow={index === 0 && isStyledFirstRow}
      />
    ))}
  </div>
)
