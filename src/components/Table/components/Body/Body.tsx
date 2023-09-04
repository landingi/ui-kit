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
  hasStyledFirstRow
}: BodyProps<Item>) => (
  <div>
    {data.map((item, index) => (
      <BodyTr
        columns={columns}
        item={item}
        rowActions={index === 0 && hasStyledFirstRow ? undefined : rowActions}
        key={item.identifier}
        hasSelect={hasSelect}
        isSelected={isSelected}
        select={select}
        handleRefresh={handleRefresh}
        externalBorder={externalBorder}
        hasSpecialStyles={index === 0 && hasStyledFirstRow}
      />
    ))}
  </div>
)
