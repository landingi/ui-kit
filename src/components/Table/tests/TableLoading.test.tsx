import '@testing-library/jest-dom'

import { useTable } from '@components/Table'
import type { Item } from '@components/Table/mocks'
import { columns, i18n } from '@components/Table/mocks'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('useTable hook tests', () => {
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
})
