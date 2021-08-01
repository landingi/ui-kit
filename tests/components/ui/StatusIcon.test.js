import React from 'react'
import { mount } from 'enzyme'
import StatusIcon from '@components/ui/StatusIcon'
import registerIcons from 'shared/helpers/icons'

registerIcons()

const statusIconComponent = <StatusIcon />

describe('<StatusIcon /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(statusIconComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `status-icon` class', () => {
    expect(wrapper.hasClass('status-icon')).toBe(true)
  })

  it('has active variant', () => {
    wrapper.setProps({
      variant: 'active'
    })
    expect(wrapper.children().hasClass('status-icon--active')).toBe(true)
  })

  it('has tiny size', () => {
    wrapper.setProps({
      size: 'tiny'
    })
    expect(wrapper.children().hasClass('status-icon--tiny')).toBe(true)
  })
})
