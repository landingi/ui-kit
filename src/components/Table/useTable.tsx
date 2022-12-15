import { useSelect } from '@helpers/hooks/useSelect'
import { getLocalStorage } from '@helpers/storage'
import { useState } from 'react'

import { Table } from './Table'
import { ItemBase, UseTableProps } from './types'

export const useTable = <Item extends ItemBase>({
  data,
  options,
  pagination = { counter: { current: 0, total: 0 } },
  name,
  constantPageLimit,
  ...rest
}: UseTableProps<Item>) => {
  // get page limit from local storage, default limit is 10
  const defaultPageLimit =
    constantPageLimit ||
    Number(getLocalStorage(`table-${name}-pageLimit`) ?? 10)

  const [pageLimit, setPageLimit] = useState<number>(defaultPageLimit)

  // calculate page index based on current counter and page limit(if current === pageLimit then defaultPageIndex = 1)
  const defaultPageIndex =
    Math.ceil(pagination.counter.current / pageLimit) || 1

  const [pageIndex, setPageIndex] = useState<number>(defaultPageIndex)

  // for optimazation purposes to not provide whole options comonent to Body
  const hasSelect = Boolean(options)

  const values = data.map(({ identifier }) => identifier)

  const selectProps = useSelect<Item['identifier']>(values)

  const pageCount = Math.ceil(pagination.counter.total / pageLimit)

  const tableProps = {
    ...rest,
    ...selectProps
  }

  return {
    Table: () => (
      <Table
        name={name}
        data={data}
        hasSelect={hasSelect}
        options={options}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageLimit={pageLimit}
        setPageIndex={setPageIndex}
        setPageLimit={setPageLimit}
        constantPageLimit={constantPageLimit}
        {...tableProps}
      />
    ),
    selected: selectProps.selected,
    pageIndex,
    pageLimit
  }
}
