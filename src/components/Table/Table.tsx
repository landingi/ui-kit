import { useSelect } from '@helpers/hooks/useSelect'

import { Body, Header } from './components'
import styles from './Table.module.scss'
import type { ItemBase, TableProps } from './types'

export const Table = <Item extends ItemBase>({
  name,
  data,
  columns,
  rowActions,
  selectOptions
}: TableProps<Item>) => {
  const hasSelect = Boolean(selectOptions)

  const values = data.map(({ identifier }) => identifier)

  const {
    selected,
    isSelected,
    isSelectedAll,
    isSelectedAny,
    select,
    selectAll
  } = useSelect<Item['identifier']>(values)

  return (
    <table className={styles.table}>
      <Header
        columns={columns}
        selectOptions={selectOptions}
        selectAll={selectAll}
        isSelectedAll={isSelectedAll}
        isSelectedAny={isSelectedAny}
        selected={selected}
      />

      <Body
        data={data}
        columns={columns}
        rowActions={rowActions}
        hasSelect={hasSelect}
        isSelected={isSelected}
        select={select}
      />
    </table>
  )
}
