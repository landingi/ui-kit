import '@testing-library/jest-dom'

import { useTable } from '@components/Table'
import type { Item } from '@components/Table/mocks'
import { columns, i18n } from '@components/Table/mocks'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('Table empty message', () => {
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
})
