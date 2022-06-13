import React from 'react'
import Html from '@components/Html'
import { mount } from 'enzyme'

const component = <Html value={<div>value</div>} />

describe('<Html/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(component)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
