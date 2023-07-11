import '@testing-library/jest-dom'

import { useTable } from '@components/Table'
import type { Item } from '@components/Table/mocks'
import { columns, i18n, mockData } from '@components/Table/mocks'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('Table options', () => {
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

    waitFor(() =>
      expect(screen.getByText('options-component')).toBeInTheDocument()
    )

    const { selected } = result.current

    expect(selected).toEqual([
      'b9e739e2-b31d-4cd3-b1ff-a82b7b91d86b',
      'ab904c1b-3077-43ce-958f-2ade367d787e',
      'b9e739e2-b31d-4cd3-b1ff-a82b7b91d86b'
    ])
  })
})
