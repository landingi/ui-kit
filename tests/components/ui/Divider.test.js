import React from 'react'
import { mount } from 'enzyme'
import Divider from 'shared/components/ui/Divider'

const dividerComponent = <Divider />

describe('<Divider/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(dividerComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `divider` class', () => {
    expect(wrapper.hasClass('divider')).toBe(true)
  })
})
