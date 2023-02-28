import '@testing-library/jest-dom'

import DropdownSelect from '@components/PerfectDropdownSelect/DropdownSelect2'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'

describe('<DropdownSelect /> mount', () => {
  it('should render', () => {
    const props = {
      children: 'children',
      options: [
        {
          label: 'jestem label',
          value: 'jestem value'
        }
      ]
    }

    const { getByTestId } = render(<DropdownSelect {...props} />)

    const dropdownSelect = getByTestId('dropdown-select')

    expect(dropdownSelect).toBeVisible()
  })

  it('display options', async () => {
    const props = {
      children: 'children',
      options: [
        {
          label: 'label 1',
          value: 'value1'
        },
        {
          label: 'label 2',
          value: 'value2'
        }
      ]
    }

    const { getByText } = render(<DropdownSelect {...props} />)

    const dropdown = screen.queryByTestId('trigger-dropdown')

    await waitFor(() => fireEvent.click(dropdown))

    getByText('label 1')
    getByText('label 2')
  })

  it('display searcher', async () => {
    const props = {
      children: 'children',
      options: [],
      hasSearcher: true
    }

    const { getByTestId } = render(<DropdownSelect {...props} />)

    const dropdown = screen.queryByTestId('trigger-dropdown')

    await waitFor(() => fireEvent.click(dropdown))

    getByTestId('search-input')
  })

  it('display empty message', async () => {
    const props = {
      children: 'children',
      options: [],
      emptyMessage: 'empty'
    }

    const { getByText } = render(<DropdownSelect {...props} />)

    const dropdown = screen.queryByTestId('trigger-dropdown')

    await waitFor(() => fireEvent.click(dropdown))

    getByText('empty')
  })

  it('display loader', async () => {
    const props = {
      children: 'children',
      options: [],
      emptyMessage: 'empty',
      isLoading: true
    }

    const { getByTestId } = render(<DropdownSelect {...props} />)

    const dropdown = screen.queryByTestId('trigger-dropdown')

    await waitFor(() => fireEvent.click(dropdown))

    getByTestId('loader-default')
  })
})
