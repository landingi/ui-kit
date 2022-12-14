import { ReactNode } from 'react'

export interface ColumnAccessor<Item> {
  identifier: string
  accessor: keyof Item
  width?: number
  header?: string
}

export interface CustomColumn<Item> {
  identifier: string
  render: (item: Item) => ReactNode
  width?: number
  header?: string
}

export interface ItemBase {
  identifier: string | number
}

export interface TableProps<Item> {
  name: string
  data: Item[]
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  rowActions?: (item: Item) => ReactNode
  selectOptions?: (ids: string[] | number[]) => ReactNode
}

export interface HeaderProps<Item> {
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  selectOptions?: (ids: string[] | number[]) => ReactNode
}

export interface BodyProps<Item> {
  data: Item[]
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  rowActions?: (item: Item) => ReactNode
  hasSelect?: boolean
}

export interface BodyTrProps<Item> {
  item: Item
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  rowActions?: (item: Item) => ReactNode
  hasSelect?: boolean
}

export interface RowActionsProps {
  height?: number
  children: ReactNode
}
