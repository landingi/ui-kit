import { ReactNode } from 'react'

type Width = number | `${number}%`

export interface ColumnAccessor<Item> {
  identifier: string
  accessor: keyof Item
  width?: Width
  header?: string
}

export interface CustomColumn<Item> {
  identifier: string
  render: (item: Item) => ReactNode
  width?: Width
  header?: string
}

export type Column<Item> = ColumnAccessor<Item> | CustomColumn<Item>

export interface ItemBase {
  identifier: string | number
}

export interface UseTableProps<Item extends ItemBase> {
  name: string
  data: Item[]
  columns: Column<Item>[]
  i18n: {
    selected: string
  }
  rowActions?: (item: Item) => ReactNode
  options?: (identifiers: Item['identifier'][]) => ReactNode
  filtersAndSorters?: () => ReactNode
  hasHeader?: boolean
  isLoading?: boolean
  emptyMessage?: ReactNode
  pagination?: {
    counter: {
      current: number
      total: number
    }
  }
}

export interface TableProps<Item extends ItemBase> extends UseTableProps<Item> {
  hasSelect: boolean
  selected: Item['identifier'][]
  isSelected: (identifier: Item['identifier']) => boolean
  isSelectedAll: boolean
  isSelectedAny: boolean
  select: (identifier: Item['identifier']) => void
  selectAll: () => void
}

export interface HeaderProps<Item extends ItemBase> {
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  selectAll: () => void
  isSelectedAll: boolean
  isSelectedAny: boolean
  options?: (identifiers: Item['identifier'][]) => ReactNode
  i18n: {
    selected: string
  }
  selected: Item['identifier'][]
  filtersAndSorters?: () => ReactNode
  hasHeader?: boolean
}

export interface BodyProps<Item extends ItemBase> {
  data: Item[]
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  rowActions?: (item: Item) => ReactNode
  hasSelect?: boolean
  isSelected: (identifier: Item['identifier']) => boolean
  select: (identifier: Item['identifier']) => void
}

export interface BodyTrProps<Item extends ItemBase> {
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
