import { useSelect } from '@helpers/hooks/useSelect'

import { Table } from './Table'
import { ItemBase, UseTableProps } from './types'

export const useTable = <Item extends ItemBase>({
  data,
  options,
  ...rest
}: UseTableProps<Item>) => {
  // for optimazation purposes to not provide whole options comonent to Body
  const hasSelect = Boolean(options)

  const values = data.map(({ identifier }) => identifier)

  const selectProps = useSelect<Item['identifier']>(values)

  const tableProps = {
    ...rest,
    ...selectProps
  }

  return {
    Table: () => (
      <Table
        data={data}
        hasSelect={hasSelect}
        options={options}
        {...tableProps}
      />
    ),
    selected: selectProps.selected,
    page: 1
  }
}
