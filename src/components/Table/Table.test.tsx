import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'

import { Column } from './types'
import { useTable } from './useTable'

type Item = {
  identifier: string
  name: string
  url: string
}

const mockData: Item[] = [
  {
    identifier: 'b9e739e2-b31d-4cd3-b1ff-a82b7b91d86b',
    name: 'test-page',
    url: 'https://test-page.com'
  },
  {
    identifier: 'ab904c1b-3077-43ce-958f-2ade367d787e',
    name: 'test-page-2',
    url: 'https://test-page-2.com'
  }
]

const columns: Column<Item>[] = [
  {
    identifier: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    identifier: 'custom-column',
    header: 'Custom Column',
    render: item => (
      <div className='test-class'>custom-column-content-{item.name}</div>
    )
  }
]

const i18n = {
  selected: 'selected',
  first: 'first',
  last: 'last'
}

describe('useTable hook tests', () => {
  it('renders properly with default data', () => {
    const { result } = renderHook(() =>
      useTable<Item>({ name: 'test-table', i18n, data: mockData, columns })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('custom-column-content-test-page')).toHaveClass(
      'test-class'
    )
  })

  it('renders loader when isLoading is set on true', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: [],
        columns,
        isLoading: true
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.getByTestId('loader-default')).toBeInTheDocument()
  })

  it('renders empty message when data is loaded and data.length is 0', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: [],
        columns,
        emptyMessage: () => <div>empty-message</div>
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.getByText('empty-message')).toBeInTheDocument()
  })

  it('renders filters and sorters abowe header when props is passed', async () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockData,
        columns,
        filtersAndSorters: triggerRefresh => (
          <button onClick={triggerRefresh} type='button'>
            filters-and-sorters
          </button>
        )
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(
      screen.getByTestId('filters-and-sorters-header-enabled')
    ).toBeInTheDocument()

    const button = screen.getByText('filters-and-sorters')

    expect(button).toBeInTheDocument()

    act(() => {
      fireEvent.click(button)
    })

    const { refresh } = result.current

    expect(refresh).toBe(true)
  })

  it('renders properly with filters and sorters instead of header', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockData,
        columns,
        filtersAndSorters: () => <div>filters-and-sorters</div>,
        hasHeader: false
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(
      screen.getByTestId('filters-and-sorters-no-header')
    ).toBeInTheDocument()
    expect(screen.getByText('filters-and-sorters')).toBeInTheDocument()
  })

  it('does not render PageLimit component when constantPageLimit props is passed', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockData,
        columns,
        constantPageLimit: 15
      })
    )

    const { Table, pageLimit } = result.current

    render(<Table />)

    expect(screen.queryByTestId('page-limit-selector')).not.toBeInTheDocument()
    expect(pageLimit).toBe(15)
  })

  it('renders checkboxes in first column when options props is passed', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockData,
        columns,
        options: (identifiers, handleRefresh) => {
          return <div>options</div>
        }
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.queryByTestId('header-options-variant')).toBeInTheDocument()
    expect(
      screen.queryByTestId('header-default-variant')
    ).not.toBeInTheDocument()
  })

  // screen.debug(undefined, Infinity)
})
