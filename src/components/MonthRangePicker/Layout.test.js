import React, { useState as useStateMock } from 'react'
import MonthRangePickerLayout from '@components/MonthRangePicker'
import { render } from '@jestutils'
import { fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

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
    const { getByTestId } = render(<MonthRangePickerLayout {...props} />)

    const monthRangePickerLayout = getByTestId('layoutMonthRangePicker')

    expect(monthRangePickerLayout).toBeVisible()
  })

  it('should render button with text from i18n props', () => {
    const { getByRole } = render(<MonthRangePickerLayout {...props} />)

    const {
      i18n: { apply }
    } = props

    const buttonApply = getByRole('button', { name: apply })

    expect(buttonApply).toBeVisible()
  })

  it('should displays <MonthRangePicker/>', () => {
    const { getByTestId } = render(<MonthRangePickerLayout {...props} />)

    const monthRangePickerNode = getByTestId('month-range-picker')

    expect(monthRangePickerNode).toBeVisible()
  })

  it('onChange callback should be called with selected range when button apply was pressed', async () => {
    const { getByRole } = render(<MonthRangePickerLayout {...props} />)

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
