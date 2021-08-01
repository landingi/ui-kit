import React from 'react'
import { mount } from 'enzyme'
import DateTimePicker from '@components/ui/DateTimePicker'

const DateTimepickerComponent = <DateTimePicker />

describe('<DateTimePicker /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(DateTimepickerComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
