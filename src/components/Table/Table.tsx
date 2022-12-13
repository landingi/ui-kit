import { Body } from './components/Body'
import { Header } from './components/Header'
import type { ItemBase, TableProps } from './types'

export const Table = <Item extends ItemBase>({
  name,
  data,
  columns
}: TableProps<Item>) => {
  return (
    <table>
      <Header columns={columns} />

      <Body data={data} columns={columns} />
    </table>
  )
}
