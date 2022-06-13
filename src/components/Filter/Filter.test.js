import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '@jestutils'
import Filter from '@components/Filter'

const props = {
  values: [
    {
      value: 'name',
      label: 'Nazwa'
    },
    {
      value: 'date',
      label: 'Data'
    }
  ],
  initialValue: 'name'
}

describe('<Filter/> tests', () => {
  it('renders properly', () => {
    render(<Filter {...props} />)
  })

  it('has `Nazwa` label', () => {
    const { getByText } = render(<Filter {...props} />)

    expect(getByText('Nazwa')).toBeInTheDocument()
  })

  it('has two filters to choose', async () => {
    const { getByTestId, findAllByText } = render(<Filter {...props} />)
    const button = getByTestId('filter-component')

    fireEvent.click(button)

    const Data = await findAllByText('Data')
    const Nazwa = await findAllByText('Nazwa')

    expect(Data.length).toEqual(1)
    expect(Nazwa.length).toEqual(2)
  })

  it('call setValue on select', async () => {
    const mockedSetValue = jest.fn()

    const { getByTestId, findByText } = render(
      <Filter {...props} setValue={mockedSetValue} />
    )
    const button = getByTestId('filter-component')

    fireEvent.click(button)

    const Data = await findByText('Data')

    fireEvent.click(Data)

    expect(mockedSetValue).toBeCalled()
  })

  it('call default setValue on select', async () => {
    const { getByTestId, findByText } = render(
      <Filter {...props} localStorageKey={'I am just a value'} />
    )
    const button = getByTestId('filter-component')

    fireEvent.click(button)

    const Data = await findByText('Data')

    fireEvent.click(Data)
  })
})
