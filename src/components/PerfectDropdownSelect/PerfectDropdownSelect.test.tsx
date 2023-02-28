import '@testing-library/jest-dom'

import { PerfectDropdownSelect } from '@components/PerfectDropdownSelect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('<DropdownSelect /> mount', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <PerfectDropdownSelect
        options={[
          {
            label: 'jestem label',
            value: 'jestem value'
          }
        ]}
      />
    )

    const dropdownSelect = getByTestId('dropdown-select')

    expect(dropdownSelect).toBeVisible()
  })

  it('display options', async () => {
    const props = {
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

    const { getByText } = render(<PerfectDropdownSelect {...props} />)

    const dropdown = screen.getByTestId('trigger-dropdown')

    await waitFor(() => fireEvent.click(dropdown))

    getByText('label 1')
    getByText('label 2')
  })

  it('display searcher', async () => {
    const props = {
      options: [],
      hasSearcher: true
    }

    const { getByTestId } = render(<PerfectDropdownSelect {...props} />)

    const dropdown = screen.getByTestId('trigger-dropdown')

    await waitFor(() => fireEvent.click(dropdown))

    getByTestId('search-input')
  })

  it('display empty message', async () => {
    const props = {
      options: [],
      emptyMessage: 'empty'
    }

    const { getByText } = render(<PerfectDropdownSelect {...props} />)

    const dropdown = screen.getByTestId('trigger-dropdown')

    await waitFor(() => fireEvent.click(dropdown))

    getByText('empty')
  })

  it('display loader', async () => {
    const props = {
      options: [],
      emptyMessage: 'empty',
      isLoading: true
    }

    const { getByTestId } = render(<PerfectDropdownSelect {...props} />)

    const dropdown = screen.getByTestId('trigger-dropdown')

    await waitFor(() => fireEvent.click(dropdown))

    getByTestId('loader-default')
  })
})
