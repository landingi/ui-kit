import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'
import { useState } from 'react'

import { Picker } from './Picker'

const useStateMock = useState as jest.MockedFunction<typeof useState>

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

describe('<MonthRangePickerLayout/> mount', () => {
  const props = {
    onChange: jest.fn(),
    minDate: new Date(2021, 10, 11),
    maxDate: new Date(2022, 10, 11),
    i18n: {
      apply: 'apply'
    },
    i18nHandler: jest.fn(translation => translation)
  }

  const selectedRangeMock = null

  const setRangeMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()

    useStateMock.mockImplementation(() => [selectedRangeMock, setRangeMock])
  })

  it('is mounted', () => {
    const { getByTestId } = render(<Picker {...props} />)

    const monthRangePickerLayout = getByTestId('layoutMonthRangePicker')

    expect(monthRangePickerLayout).toBeVisible()
  })

  it('should render button with text from i18n props', () => {
    const { getByRole } = render(<Picker {...props} />)

    const {
      i18n: { apply }
    } = props

    const buttonApply = getByRole('button', { name: apply })

    expect(buttonApply).toBeVisible()
  })

  it('should displays <MonthRangePicker/>', () => {
    const { getByTestId } = render(<Picker {...props} />)

    const monthRangePickerNode = getByTestId('month-range-picker')

    expect(monthRangePickerNode).toBeVisible()
  })

  it('onChange callback should be called with selected range when button apply was pressed', async () => {
    const { getByRole } = render(<Picker {...props} />)

    const {
      onChange,
      i18n: { apply }
    } = props

    const buttonApplyNode = getByRole('button', { name: apply })

    fireEvent.click(buttonApplyNode)

    expect(onChange).toBeCalledTimes(1)

    expect(onChange).toBeCalledWith(selectedRangeMock)
  })
})
