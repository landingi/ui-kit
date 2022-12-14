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
  selectOptions?: (identifiers: Item['identifier'][]) => ReactNode
}

export interface HeaderProps<Item> {
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  selectAll: () => void
  isSelectedAll: boolean
  isSelectedAny: boolean
  selectOptions?: (identifiers: Item['identifier'][]) => ReactNode
  selected: Item['identifier'][]
}

export interface BodyProps<Item> {
  data: Item[]
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  rowActions?: (item: Item) => ReactNode
  hasSelect?: boolean
  isSelected: (identifier: Item['identifier']) => boolean
  select: (identifier: Item['identifier']) => void
}

export interface BodyTrProps<Item> {
  item: Item
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  rowActions?: (item: Item) => ReactNode
  hasSelect?: boolean
  isSelected: (identifier: Item['identifier']) => boolean
  select: (identifier: Item['identifier']) => void
}

export interface RowActionsProps {
  height?: number
  children: ReactNode
}
