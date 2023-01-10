import '@testing-library/jest-dom'

import { useTable } from '@components/Table'
import type { Item } from '@components/Table/mocks'
import { columns, i18n, mockData } from '@components/Table/mocks'
import * as browser from '@helpers/browser'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('Table row actions', () => {
  it('renders properly with rowActions props', () => {
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
})
