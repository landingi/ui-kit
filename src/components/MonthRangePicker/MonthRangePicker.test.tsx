import '@testing-library/jest-dom'

import { MonthRangePicker } from '@components/MonthRangePicker/MonthRangePicker'
import { fireEvent, render } from '@testing-library/react'
import { useCallback, useEffect } from 'react'

import { monthsArray } from './helpers'

const useCallbackMock = useCallback as jest.MockedFunction<typeof useCallback>
const useEffectMock = useEffect as jest.MockedFunction<typeof useEffect>

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useCallback: jest.fn(),
  useEffect: jest.fn()
}))

describe('<MonthRangePicker/> mount', () => {
  const props = {
    onChange: jest.fn(),
    minDate: new Date(2018, 3, 11),
    maxDate: new Date(2100, 10, 11),
    i18nHandler: jest.fn(translation => translation)
  }

  const setYearMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()

    useCallbackMock.mockImplementation(() => setYearMock)
    useEffectMock.mockImplementation(() => props.onChange)
  })

  it('should be displayed', () => {
    const { getByTestId } = render(<MonthRangePicker {...props} />)

    const monthRangePickerNode = getByTestId('month-range-picker')

    expect(monthRangePickerNode).toBeVisible()
  })

  it('setYear func should be called on click arrow left', () => {
    const { getAllByRole } = render(<MonthRangePicker {...props} />)

    const btnArrowLeftNode = getAllByRole('button')[0]

    fireEvent.click(btnArrowLeftNode)

    expect(setYearMock).toBeCalledTimes(1)
  })

  it('setYear func should be called on click arrow right', async () => {
    const { getAllByRole } = render(<MonthRangePicker {...props} />)

    const btnArrowRightNode = getAllByRole('button')[1]

    fireEvent.click(btnArrowRightNode)

    expect(setYearMock).toBeCalledTimes(1)
  })

  it('month should has first and last style after click', async () => {
    const { getByRole } = render(<MonthRangePicker {...props} />)

    const decemberBtn = getByRole('button', { name: 'month.december' })

    fireEvent.click(decemberBtn)

    expect(decemberBtn).toHaveClass('button_month--last', 'button_month--first')
  })

  it('all initial months should be enabled to select', () => {
    const { getByTestId } = render(<MonthRangePicker {...props} />)

    monthsArray.forEach(month => {
      const buttonMonthNode = getByTestId(`button-${month.name}`)

      expect(buttonMonthNode).not.toHaveClass('button_month--disabled')
    })
  })

  it('month should has selecting style after clicking and during hover', () => {
    const { getByTestId } = render(<MonthRangePicker {...props} />)

    const decemberBtn = getByTestId('button-month.december')

    fireEvent.click(decemberBtn)

    fireEvent.mouseOver(decemberBtn)

    expect(decemberBtn).toHaveClass('button_month--selecting')
  })

  it('month should be selected after first click, hover and second click', () => {
    const { getByTestId } = render(<MonthRangePicker {...props} />)

    const decemberBtn = getByTestId('button-month.december')

    fireEvent.click(decemberBtn)

    fireEvent.mouseOver(decemberBtn)

    fireEvent.click(decemberBtn)

    expect(decemberBtn).toHaveClass('button_month--selected')
  })

  it('month button should be disabled if is before minimal date and after maximal date', () => {
    const newProps = {
      ...props,
      minDate: new Date(2021, 5, 2),
      maxDate: new Date(2021, 8, 3)
    }

    const { container } = render(<MonthRangePicker {...newProps} />)

    const allMonthButtons = container.querySelectorAll('.button_month')

    allMonthButtons.forEach((node, index) => {
      if (index >= 9 || index <= 4) {
        expect(node).toHaveClass('button_month--disabled')
      }
    })
  })
})
