import React from 'react'
import { mount } from 'enzyme'
import TextOverflow from '@components/ui/TextOverflow'

const props = {
  children: 'placeholder'
}

const overflowComponent = (
  <TextOverflow {...props}>{props.children}</TextOverflow>
)

describe('<TextOverflow/> mount', () => {
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
