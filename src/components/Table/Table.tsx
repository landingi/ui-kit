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

  return (
    <table className={styles.table}>
      <Header columns={columns} selectOptions={selectOptions} />

      <Body
        data={data}
        columns={columns}
        rowActions={rowActions}
        hasSelect={hasSelect}
      />
    </table>
  )
}
