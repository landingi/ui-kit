import React from 'react'
import { ShortLogo, LongLogo } from '@components/global/Logo'
import { mount } from 'enzyme'

const component = <ShortLogo />

describe('<ShortLogo/> mount', () => {
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

describe('<LongLogo /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<LongLogo />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
