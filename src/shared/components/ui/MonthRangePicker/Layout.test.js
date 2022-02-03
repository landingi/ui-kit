import React, { useState as useStateMock } from 'react'
import { mount } from 'enzyme'
import MonthRangePickerLayout from '@components/ui/MonthRangePicker'
import MonthRangePicker from '@components/ui/MonthRangePicker/MonthRangePicker'
import Button from '@components/ui/Button'
import Spacer from '@components/ui/Spacer'

const props = {
  onChange: jest.fn(),
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

  it('should render MonthRangePicker with minDate, maxDate props passed to wrapper', () => {
    const MonthRangePickerComponent = wrapper.find(MonthRangePicker)

    expect(MonthRangePickerComponent.exists()).toBe(true)
    expect(MonthRangePickerComponent.prop('minDate')).toEqual(
      wrapper.prop('minDate')
    )
    expect(MonthRangePickerComponent.prop('maxDate')).toEqual(
      wrapper.prop('maxDate')
    )
  })

  it('on click button apply range should be called with onChange function', async () => {
    const { onChange } = props
    const ButtonApply = wrapper.find(Button).at(2)

    await ButtonApply.invoke('onClick')(selectedRangeMock)

    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledWith(selectedRangeMock)
  })

  it('default prop onChange should be null', () => {
    const result = MonthRangePickerLayout.defaultProps.onChange()

    expect(result).toBe(null)
  })
})
