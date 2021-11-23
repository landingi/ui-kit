import React from 'react'
import { mount } from 'enzyme'
import DateTimePicker from '@components/ui/DateTimePicker'
import { Calendar, DateRange } from 'react-date-range'
import { act } from 'react-dom/test-utils'

const props = {
  setDate: jest.fn(),
  minDate: '2021/11/10',
  maxDate: new Date(2022, 1, 11),
  oneDatePicker: true,
  showMonthAndYearPickers: false,
  selectedDateCalendar: new Date(2021, 11, 15)
}

const rangePickerProps = {
  ...props,
  minDate: new Date(2021, 11, 15),
  oneDatePicker: false,
  showMonthAndYearPickers: true,
  i18n: {
    apply: 'Apply'
  }
}

const DateTimepickerComponent = <DateTimePicker {...props} />
const RangeDatePickerComponent = <DateRange {...rangePickerProps} />

describe('<DateTimePicker /> mount as Calendar', () => {
  let wrapper

  beforeAll(() => {
    const div = document.createElement('div')
    window.domNode = div
    document.body.appendChild(div)
  })

  beforeEach(() => {
    wrapper = mount(DateTimepickerComponent, {
      attachTo: window.domNode
    })
  })

  afterEach(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should contains rendered Calendar', () => {
    expect(wrapper.find(Calendar).length).toBe(1)
  })

  it('should not render DateRange', () => {
    expect(wrapper.find(DateRange).exists()).toBe(false)
  })

  it('setDate func should be passed as prop to Calendar onChange', () => {
    expect(wrapper.find(Calendar).prop('onChange')).toBe(props.setDate)
  })

  it('setDate func should be called with selected date in Calendar', async () => {
    const selectedDate = new Date(2022, 10, 1)

    await wrapper.find('Calendar').invoke('onChange')(selectedDate)

    expect(props.setDate).toBeCalledTimes(1)
    expect(props.setDate).toBeCalledWith(selectedDate)
  })

  it('Calendar should contains min and max date passed as props', () => {
    const { minDate, maxDate } = props

    expect(wrapper.find('Calendar').prop('minDate')).toEqual(new Date(minDate))
    expect(wrapper.find('Calendar').prop('maxDate')).toEqual(maxDate)
  })

  it('Calendar should contains date prop equal selected date', () => {
    const { selectedDateCalendar } = props

    expect(wrapper.find('Calendar').prop('date')).toEqual(selectedDateCalendar)
  })

  it('Calendar should not contains month and year pickers', () => {
    expect(wrapper.find('Calendar').prop('showMonthAndYearPickers')).toEqual(
      false
    )
  })
})

describe('<DateTimePicker /> mount as DateRange', () => {
  let wrapper

  beforeAll(() => {
    const div = document.createElement('div')
    window.domNode = div
    document.body.appendChild(div)
  })

  beforeEach(() => {
    wrapper = mount(RangeDatePickerComponent, {
      attachTo: window.domNode
    })
  })

  afterEach(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('should contains rendered DateRange', () => {
    expect(wrapper.find(DateRange).exists()).toBe(true)
  })

  it('should contains month and year pickers', () => {
    expect(wrapper.find(DateRange).find('.rdrMonthPicker').length).toBe(1)
    expect(wrapper.find(DateRange).find('.rdrYearPicker').length).toBe(1)
  })

  it('should contains minDate equal passed minDate as prop', () => {
    const { minDate } = rangePickerProps

    expect(wrapper.find(DateRange).prop('minDate')).toEqual(new Date(minDate))
  })
})
