import '@testing-library/jest-dom'

import { useTable } from '@components/Table'
import type { Item } from '@components/Table/mocks'
import { columns, i18n, mockData } from '@components/Table/mocks'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('Table filters and sorters', () => {
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
})
