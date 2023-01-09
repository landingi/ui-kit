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
  render: (item: Item, handleRefresh: () => void) => ReactNode
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
    first: string
    last: string
  }
  rowActions?: (item: Item, handleRefresh: () => void) => ReactNode
  options?: (
    identifiers: Item['identifier'][],
    handleRefresh: () => void
  ) => ReactNode
  filtersAndSorters?: (handleRefresh: () => void) => ReactNode
  hasHeader?: boolean
  isLoading?: boolean
  emptyMessage?: () => ReactNode
  pagination?: {
    current: number
    total: number
    handlePageChange?: (page: number) => void
  }
  constantPageLimit?: number
}

export interface TableProps<Item extends ItemBase> extends UseTableProps<Item> {
  hasSelect: boolean
  pageCount: number
  pageLimit: number
  setPageLimit: (page: number) => void
  handleRefresh: () => void
}

export interface HeaderProps<Item extends ItemBase> {
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  selectAll: () => void
  isSelectedAll: boolean
  isSelectedAny: boolean
  options?: (
    identifiers: Item['identifier'][],
    handleRefresh: () => void
  ) => ReactNode
  i18n: {
    selected: string
  }
  selected: Item['identifier'][]
  filtersAndSorters?: (handleRefresh: () => void) => ReactNode
  hasHeader?: boolean
  handleRefresh: () => void
}

export interface BodyProps<Item extends ItemBase> {
  data: Item[]
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  rowActions?: (item: Item, handleRefresh: () => void) => ReactNode
  hasSelect?: boolean
  isSelected: (identifier: Item['identifier']) => boolean
  select: (identifier: Item['identifier']) => void
  handleRefresh: () => void
}

export interface BodyTrProps<Item extends ItemBase> {
  item: Item
  columns: (ColumnAccessor<Item> | CustomColumn<Item>)[]
  rowActions?: (item: Item, handleRefresh: () => void) => ReactNode
  hasSelect?: boolean
  isSelected: (identifier: Item['identifier']) => boolean
  select: (identifier: Item['identifier']) => void
  handleRefresh: () => void
}

export interface RowActionsProps {
  height?: number
  children: ReactNode
}

export interface PaginationProps {
  pageCount: number
  i18n: {
    first: string
    last: string
  }
  pagination?: {
    current: number
    total: number
    handlePageChange?: (page: number) => void
  }
}

export interface PageLimitProps {
  pageLimit: number
  name: string
  i18n: {
    first: string
    last: string
  }
  onChange: (number) => void
}
