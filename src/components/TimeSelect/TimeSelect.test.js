import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import TimeSelect from '@components/ui/TimeSelect'

const mockOnChange = jest.fn()

const props = {
  onChange: mockOnChange,
  label: 'Time select'
}

describe('<TimeSelect/> mount', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('default displayed value should be "12:00"', () => {
    const { getByDisplayValue } = render(<TimeSelect {...props} />)

    const inputNode = getByDisplayValue('12:00')

    expect(inputNode).toBeTruthy()
  })

  it('render proper label', () => {
    const { getByText } = render(<TimeSelect {...props} />)

    const labelNode = getByText(props.label)

    expect(labelNode).toBeTruthy()
  })

  it('onChange should be called with proper 24H format converted from 12H AM/PM clock', () => {
    const { getByRole } = render(<TimeSelect {...props} />)

    const inputNode = getByRole('textbox')

    fireEvent.change(inputNode, { target: { value: '09:27' } })

    expect(mockOnChange).toBeCalledWith('21:27')
  })

  it('onChange should not be fired when component is disabled', () => {
    const { getByRole } = render(<TimeSelect {...props} disabled={true} />)

    const inputNode = getByRole('textbox')

    fireEvent.change(inputNode, { target: { value: '09:27' } })

    expect(props.onChange).toHaveBeenCalledTimes(0)
  })

  it('onChange should be called with passed formikKey prop and formated time', () => {
    const onChangeMock = jest.fn((formikKey, formatedTime) => ({
      [formikKey]: formatedTime
    }))

    const { getByRole } = render(
      <TimeSelect
        label='End time'
        onChange={onChangeMock}
        formikKey='endTime'
      />
    )

    const inputNode = getByRole('textbox')

    fireEvent.change(inputNode, { target: { value: '10:27' } })

    expect(onChangeMock).toHaveBeenCalledWith('endTime', '22:27')
  })
})
