import React, { useCallback as useCallbackMock, useEffect } from 'react'
import { mount } from 'enzyme'
import MonthRangePicker from '@components/ui/MonthRangePicker/MonthRangePicker'
import Button from '@components/ui/Button'

const props = {
  onChange: jest.fn(),
  minDate: new Date(2018, 3, 11),
  maxDate: new Date(2024, 10, 11)
}

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useCallback: jest.fn(),
  useEffect: jest.fn()
}))

const setYearMock = jest.fn()

const MonthRangePickerComponent = <MonthRangePicker {...props} />

describe('<MonthRangePicker/> mount', () => {
  let wrapper

  beforeEach(() => {
    useCallbackMock.mockImplementation(() => setYearMock)
    useEffect.mockImplementation(() => props.onChange)
    wrapper = mount(MonthRangePickerComponent)
  })

  afterEach(() => {
    jest.clearAllMocks()
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('setYear func should be called on click arrow left', async () => {
    const btnArrowLeft = wrapper.find(Button).at(0)

    await btnArrowLeft.invoke('onClick')()

    expect(setYearMock).toBeCalledTimes(1)
  })

  it('setYear func should be called on click arrow right', async () => {
    const btnArrowRight = wrapper.find(Button).at(0)

    await btnArrowRight.invoke('onClick')()

    expect(setYearMock).toBeCalledTimes(1)
  })

  it('month should has first and last style after click', async () => {
    wrapper.find('div.grid-container').find('button').last().simulate('click')

    const decemberBtn = wrapper.find('div.grid-container').find('button').last()

    expect(decemberBtn.hasClass('button_month--last')).toBe(true)
    expect(decemberBtn.hasClass('button_month--first')).toBe(true)
  })

  it('all initial months should be enabled to select', () => {
    wrapper
      .find('div.grid-container')
      .find('button')
      .map(node => {
        expect(node.hasClass('button_month--disabled')).toBe(false)
      })
  })

  it('month should has selecting style after clicking and during hover', () => {
    wrapper
      .find('div.grid-container')
      .find('button')
      .last()
      .simulate('click')
      .simulate('mouseOver')

    const decemberBtn = wrapper.find('div.grid-container').find('button').last()

    expect(decemberBtn.hasClass('button_month--selecting')).toBe(true)
  })

  it('month should be selected after first click, hover and second click', () => {
    wrapper
      .find('div.grid-container')
      .find('button')
      .last()
      .simulate('click')
      .simulate('mouseOver')
      .simulate('click')

    const decemberBtn = wrapper.find('div.grid-container').find('button').last()

    expect(decemberBtn.hasClass('button_month--selected')).toBe(true)
  })

  it('month button should be disabled if is before minimal date and after maximal date', () => {
    wrapper.setProps({
      minDate: new Date(2021, 5, 2),
      maxDate: new Date(2021, 8, 3)
    })

    wrapper
      .find('div.grid-container')
      .find('button')
      .map((node, index) => {
        if (index >= 9 || index <= 4) {
          expect(node.hasClass('button_month--disabled')).toBe(true)
        }
      })
  })
})
