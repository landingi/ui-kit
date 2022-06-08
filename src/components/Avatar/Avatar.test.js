import React from 'react'
import { mount } from 'enzyme'
import Avatar from '@components/Avatar'

const avatarComponent = <Avatar />

describe('<Avatar /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(avatarComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `avatar` class', () => {
    expect(wrapper.find('span').hasClass('avatar')).toBe(true)
  })

  it('has image variant', () => {
    wrapper.setProps({
      variant: 'image'
    })
    expect(wrapper.find('span').hasClass('avatar--image')).toBe(true)
  })

  it('has blank variant', () => {
    wrapper.setProps({
      variant: 'blank'
    })
    expect(wrapper.find('span').hasClass('avatar--blank')).toBe(true)
  })

  it('has medium size', () => {
    wrapper.setProps({
      size: 'medium'
    })
    expect(wrapper.find('span').hasClass('avatar--medium')).toBe(true)
  })

  it('has tiny size', () => {
    wrapper.setProps({
      size: 'tiny'
    })
    expect(wrapper.find('span').hasClass('avatar--tiny')).toBe(true)
  })
})
