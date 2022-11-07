import DateTimePicker from '@components/DateTimePicker'
import { fireEvent,render } from '@testing-library/react'
import React from 'react'

const mockSetState = jest.fn()

describe('<DateTimePicker /> test as default variant', () => {
  it('renders properly', () => {
    render(<DateTimePicker setDate={mockSetState} />)
  })

  it('renders properly with min date', () => {
    render(<DateTimePicker setDate={mockSetState} minDate='2021/11/10' />)
  })

  it('call setState on apply', () => {
    const { getByTestId } = render(<DateTimePicker setDate={mockSetState} />)

    const applyButton = getByTestId('apply-button')

    fireEvent.click(applyButton)

    expect(mockSetState).toBeCalled()
  })
})

describe('<DateTimePicker /> test as one day picker', () => {
  it('renders properly', () => {
    render(<DateTimePicker setDate={mockSetState} oneDatePicker />)
  })
})
