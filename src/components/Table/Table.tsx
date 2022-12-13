import { Body, Header } from './components'
import styles from './Table.module.scss'
import type { ItemBase, TableProps } from './types'

export const Table = <Item extends ItemBase>({
  name,
  data,
  columns,
  rowActions
}: TableProps<Item>) => {
  return (
    <table className={styles.table}>
      <Header columns={columns} />

      <Body data={data} columns={columns} rowActions={rowActions} />
    </table>
  )
}
