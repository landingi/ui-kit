import { useSelect } from '@helpers/hooks/useSelect'
import { getLocalStorage } from '@helpers/storage'
import { useState } from 'react'

import { Table } from './Table'
import { ItemBase, UseTableProps } from './types'

export const useTable = <Item extends ItemBase>({
  data,
  options,
  pagination = { total: 1, current: 1 },
  name,
  constantPageLimit,
  i18n = { selected: 'word.selected', first: 'word.first', last: 'word.last' },
  ...rest
}: UseTableProps<Item>) => {
  const [refresh, setRefresh] = useState<boolean>(false)

  const handleRefresh = () => setRefresh(!refresh)

  // get page limit from local storage, default limit is 10
  const defaultPageLimit =
    constantPageLimit ||
    Number(getLocalStorage(`table-${name}-pageLimit`) ?? 10)

  const [pageLimit, setPageLimit] = useState<number>(defaultPageLimit)

  // for optimazation purposes to not provide whole options comonent to Body
  const hasSelect = Boolean(options)

  const pageCount = Math.ceil(pagination.total / pageLimit)

  const values = data.map(({ identifier }) => identifier)

  const {
    selectAll,
    isSelectedAll,
    isSelectedAny,
    selected,
    isSelected,
    select,
    deselectAll
  } = useSelect<Item['identifier']>(values)

  return {
    Table: () => (
      <Table
        name={name}
        data={data}
        hasSelect={hasSelect}
        options={options}
        pageCount={pageCount}
        pageLimit={pageLimit}
        setPageLimit={setPageLimit}
        constantPageLimit={constantPageLimit}
        handleRefresh={handleRefresh}
        pagination={pagination}
        i18n={i18n}
        selectAll={selectAll}
        isSelectedAll={isSelectedAll}
        isSelectedAny={isSelectedAny}
        isSelected={isSelected}
        select={select}
        selected={selected}
        deselectAll={deselectAll}
        {...rest}
      />
    ),
    pageLimit,
    refresh,
    selected,
    deselectAll
  }
}
