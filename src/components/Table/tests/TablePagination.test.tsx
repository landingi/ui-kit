import '@testing-library/jest-dom'

import { useTable } from '@components/Table'
import type { Item } from '@components/Table/mocks'
import { columns, i18n, mockDataWithPagination } from '@components/Table/mocks'
import { fireEvent, render, screen } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'

describe('Table pagination', () => {
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
})
