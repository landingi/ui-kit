import React, { useState as useStateMock } from 'react'
import { mount } from 'enzyme'
import registerIcons from '@helpers/icons'
import MonthRangePickerLayout from '@components/ui/MonthRangePicker'
import MonthRangePicker from '@components/ui/MonthRangePicker/MonthRangePicker'
import Button from '@components/ui/Button'
import Spacer from '@components/ui/Spacer'

registerIcons()

const props = {
  onchange: jest.fn(),
  minDate: new Date(2021, 10, 11),
  maxDate: new Date(2022, 10, 11),
  i18n: {
    apply: 'apply'
  }
}

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

const selectedRangeMock = null

const setRangeMock = jest.fn()

const MonthRangePickerWrapper = <MonthRangePickerLayout {...props} />

describe('<MonthRangePickerLayout/> mount', () => {
  let wrapper

  beforeEach(() => {
    useStateMock.mockImplementation(() => [selectedRangeMock, setRangeMock])
    wrapper = mount(MonthRangePickerWrapper)
  })

  afterEach(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render three <Spacer/>', () => {
    expect(wrapper.find(Spacer).length).toBe(3)
  })

  it('should render <Button/> with text from i18n props a', () => {
    const {
      i18n: { apply }
    } = props

    expect(wrapper.find(Button).at(2).text()).toEqual(apply)
  })

  it('should render MonthRangePicker with minDate, maxDate, onChange props', () => {
    const MonthRangePickerComponent = wrapper.find(MonthRangePicker)
    const { onChange, minDate, maxDate } = props

    expect(MonthRangePickerComponent.exists()).toBe(true)
    expect(MonthRangePickerComponent.props('maxDate')).toEqual(maxDate)
    expect(MonthRangePickerComponent.props('minDate')).toEqual(minDate)
    expect(MonthRangePickerComponent.props('onChange')).toEqual(onChange)
  })
})
