import React from 'react'
import { mount } from 'enzyme'
import Spreader from '@components/ui/Spreader'

const spreaderComponent = <Spreader />

describe('<Spreader /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(spreaderComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `spreader` class', () => {
    expect(wrapper.hasClass('spreader')).toBe(true)
  })
})
