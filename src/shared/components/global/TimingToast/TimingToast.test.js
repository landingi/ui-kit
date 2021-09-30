import React from 'react'
import TimingToast from '@components/global/TimingToast'
import { mount } from 'enzyme'
import registerIcons from '@helpers/icons'

registerIcons()

const component = <TimingToast />

describe('<TimingToast/> mount', () => {
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
