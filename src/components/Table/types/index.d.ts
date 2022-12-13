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
}

export interface HeaderProps<Item> {
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
}

export interface BodyProps<Item> {
  data: Item[]
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
}
