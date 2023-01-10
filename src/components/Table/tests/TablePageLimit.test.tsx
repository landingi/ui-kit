import '@testing-library/jest-dom'

import { useTable } from '@components/Table'
import type { Item } from '@components/Table/mocks'
import { columns, i18n, mockData } from '@components/Table/mocks'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('Table page limit', () => {
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

  it('changes page limit on select', () => {
    const { result } = renderHook(() =>
      useTable<Item>({
        name: 'test-table',
        i18n,
        data: mockData,
        columns
      })
    )

    const { Table, pageLimit } = result.current

    render(<Table />)

    const select = screen.getByTestId('page-limit-selector')

    expect(pageLimit).toBe(10)

    act(() => {
      fireEvent.change(select, { target: { value: '25' } })
    })

    const { pageLimit: newPageLimit } = result.current

    expect(newPageLimit).toBe(25)
  })
})
