import React from 'react'
import { mount } from 'enzyme'
import Divider from '@components/ui/Divider'

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
    expect(wrapper.find('div').hasClass('divider')).toBe(true)
  })

  it('has dropdown variant', () => {
    wrapper.setProps({
      variant: 'dropdown'
    })
    expect(wrapper.find('div').hasClass('divider--dropdown')).toBe(true)
  })

  it('has horizontal variant', () => {
    wrapper.setProps({
      variant: 'horizontal'
    })
    expect(wrapper.find('div').hasClass('divider--horizontal')).toBe(true)
  })

  it('has menu variant', () => {
    wrapper.setProps({
      variant: 'menu'
    })
    expect(wrapper.find('div').hasClass('divider--menu')).toBe(true)
  })

  it('has normal variant', () => {
    wrapper.setProps({
      variant: 'normal'
    })
    expect(wrapper.find('div').hasClass('divider--normal')).toBe(true)
  })

  it('has vertical align', () => {
    wrapper.setProps({
      align: 'vertical'
    })
    expect(wrapper.find('div').hasClass('divider--normal')).toBe(true)
  })
})
