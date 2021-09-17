import React from 'react'
import { mount } from 'enzyme'
import Overflow from '@components/ui/Overflow'

const props = {
  children: 'placeholder'
}

const overflowComponent = (
  <Overflow {...props}>{props.children}</Overflow>
)

describe('<Overflow/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(overflowComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `overflow` class', () => {
    expect(wrapper.hasClass('overflow')).toBe(true)
  })
})
