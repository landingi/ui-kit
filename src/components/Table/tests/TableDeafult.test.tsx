import '@testing-library/jest-dom'

import { useTable } from '@components/Table'
import type { Item } from '@components/Table/mocks'
import { columns, i18n, mockData } from '@components/Table/mocks'
import * as browser from '@helpers/browser'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('Table default', () => {
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
})
