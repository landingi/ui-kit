import React from 'react'
import { mount } from 'enzyme'
import DateTimePicker from '@components/ui/DateTimePicker'
import { act } from 'react-dom/test-utils'
import { Calendar } from 'react-date-range'

const props = {
  setDate: jest.fn(),
  minDate: '2021/11/10',
  maxDate: new Date(2022, 1, 11),
  oneDatePicker: true,
  showMonthAndYearPickers: false
}

const DateTimepickerComponent = <DateTimePicker {...props} />

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
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should contains rendered Calendar', () => {
    expect(wrapper.find(Calendar).length).toBe(1)
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
})
