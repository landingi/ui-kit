import React from 'react'
import Spacer from '@components/ui/Spacer'
import { mount } from 'enzyme'

const spacerComponent = <Spacer />

describe('<Spacer/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(spacerComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `spacer` class', () => {
    expect(wrapper.hasClass('spacer')).toBe(true)
  })
})
