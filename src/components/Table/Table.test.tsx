import '@testing-library/jest-dom'

import * as browser from '@helpers/browser'
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

const mockDataWithPagination: Item[] = [
  ...mockData,
  {
    identifier: 'f9c6dba4-b048-4c8b-a32b-c2b71c44d592',
    name: 'test-page-3',
    url: 'https://test-page-3.com'
  },
  {
    identifier: '7beb3962-3cc6-49b3-8fcb-2f868ec717c1',
    name: 'test-page-4',
    url: 'https://test-page-4.com'
  },
  {
    identifier: '8a813890-e65f-4399-b4b6-99e6130ef6e3',
    name: 'test-page-5',
    url: 'https://test-page-5.com'
  },
  {
    identifier: '7aa78f81-dc67-4378-92b8-80d22e00e2f9',
    name: 'test-page-6',
    url: 'https://test-page-6.com'
  },
  {
    identifier: 'd3e69485-3ac3-480b-bf64-8d55c901a38b',
    name: 'test-page-7',
    url: 'https://test-page-7.com'
  },
  {
    identifier: 'fed2041a-f374-4055-9c14-f4f270ba9501',
    name: 'test-page-8',
    url: 'https://test-page-8.com'
  },
  {
    identifier: 'ea2ea90c-a06d-47cb-9e78-efb80c5ba3ca',
    name: 'test-page-9',
    url: 'https://test-page-9.com'
  },
  {
    identifier: '1d48eb60-6df2-4ced-b7b1-b573c674040e',
    name: 'test-page-10',
    url: 'https://test-page-10.com'
  },
  {
    identifier: '97da75fe-7355-4404-8a31-196b2702978d',
    name: 'test-page-11',
    url: 'https://test-page-11.com'
  },
  {
    identifier: 'ec940f0e-a3e9-4a2d-b1e8-c174b49d452f',
    name: 'test-page-12',
    url: 'https://test-page-12.com'
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

  it('renders properly with default data on safari', () => {
    // @ts-ignore
    browser.isSafari = true

    const { result } = renderHook(() =>
      useTable<Item>({ name: 'test-table', i18n, data: mockData, columns })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('custom-column-content-test-page')).toHaveClass(
      'test-class'
    )

    // @ts-ignore
    browser.isSafari = false
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
        options: () => {
          return <div>options-component</div>
        }
      })
    )

    const { Table } = result.current

    const { rerender } = render(<Table />)

    expect(screen.queryByTestId('header-options-variant')).toBeInTheDocument()
    expect(
      screen.queryByTestId('header-default-variant')
    ).not.toBeInTheDocument()

    const checkboxes = screen.getAllByTestId('checkbox')

    expect(screen.queryByText('options-component')).not.toBeInTheDocument()

    act(() => {
      fireEvent.click(checkboxes[0])
    })

    act(() => {
      fireEvent.click(checkboxes[1])
    })

    rerender(<Table />)

    expect(screen.getByText('options-component')).toBeInTheDocument()
  })

  it('renders properly without header with options and filters-selectors enabled', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockData,
        columns,
        options: () => <div>options-component</div>,
        filtersAndSorters: () => <div>filters-and-sorters</div>,
        hasHeader: false
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(
      screen.getByTestId('filters-and-selectors-in-header')
    ).toBeInTheDocument()
    expect(screen.getByText('filters-and-sorters')).toBeInTheDocument()
  })

  it('renders properly with pagination and handleChange func', () => {
    const mockHandlePageChange = jest.fn()

    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockDataWithPagination,
        columns,
        constantPageLimit: 2, // 2 items per page
        pagination: {
          current: 1,
          total: 12,
          handlePageChange: mockHandlePageChange
        }
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.getByTestId('pagination-component')).toBeInTheDocument()

    act(() => {
      fireEvent.click(screen.getByTestId('pagination-next'))
    })

    expect(mockHandlePageChange).toBeCalledWith(2)
  })

  it('renders properly with pagination without handleChange func', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockDataWithPagination,
        columns,
        constantPageLimit: 2, // 2 items per page
        pagination: {
          current: 1,
          total: 12
        }
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.getByTestId('pagination-component')).toBeInTheDocument()

    act(() => {
      fireEvent.click(screen.getByTestId('pagination-next'))
    })
  })

  it('renders properly with rowActions props on safari', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockData,
        columns,
        rowActions: item => <div>row-actions-{item.name}</div>
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.getByText('row-actions-test-page')).toBeInTheDocument()
  })

  it('renders properly with rowActions props on safari', () => {
    // @ts-ignore
    browser.isSafari = true

    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockData,
        columns,
        rowActions: item => <div>row-actions-{item.name}</div>
      })
    )

    const { Table } = result.current

    render(<Table />)

    expect(screen.getByText('row-actions-test-page')).toBeInTheDocument()

    // @ts-ignore
    browser.isSafari = false
  })

  // screen.debug(undefined, Infinity)
})
