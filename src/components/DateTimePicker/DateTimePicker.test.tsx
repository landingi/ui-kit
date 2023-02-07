import { DateTimePicker } from '@components/DateTimePicker'
import { fireEvent, render } from '@testing-library/react'

const i18n = {
  apply: 'Apply'
}

const mockSetState = jest.fn()

describe('<DateTimePicker /> test as default variant', () => {
  it('renders properly', () => {
    render(<DateTimePicker setDate={mockSetState} i18n={i18n} />)
  })

  it('renders properly with min date', () => {
    render(
      <DateTimePicker setDate={mockSetState} minDate='2021/11/10' i18n={i18n} />
    )
  })

  it('call setState on apply', () => {
    const { getByTestId } = render(
      <DateTimePicker setDate={mockSetState} i18n={i18n} />
    )

    const applyButton = getByTestId('apply-button')

    fireEvent.click(applyButton)

    expect(mockSetState).toBeCalled()
  })
})

describe('<DateTimePicker /> test as one day picker', () => {
  it('renders properly', () => {
    render(<DateTimePicker setDate={mockSetState} oneDatePicker i18n={i18n} />)
  })
})
