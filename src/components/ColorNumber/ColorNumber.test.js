import React from 'react'
import { mount } from 'enzyme'
import ColorNumber from '@components/ui/ColorNumber'

const colorNumberComponent = <ColorNumber variant='success'>5</ColorNumber>

describe('<ColorNumber /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(colorNumberComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('has default fontsize set to `18` ', () => {
    expect(wrapper.find('span').hasClass('color-number__size--18')).toBe(true)
  })

  it('has fontsize set to `10` ', () => {
    wrapper.setProps({
      size: 10
    })
    expect(wrapper.find('span').hasClass('color-number__size--10')).toBe(true)
  })

  it('has fontsize set to `12` ', () => {
    wrapper.setProps({
      size: 12
    })
    expect(wrapper.find('span').hasClass('color-number__size--12')).toBe(true)
  })

  it('has fontsize set to `16` ', () => {
    wrapper.setProps({
      size: 16
    })
    expect(wrapper.find('span').hasClass('color-number__size--16')).toBe(true)
  })

  it('has fontsize set to `32` ', () => {
    wrapper.setProps({
      size: 32
    })
    expect(wrapper.find('span').hasClass('color-number__size--32')).toBe(true)
  })

  it('has fontsize set to `44` ', () => {
    wrapper.setProps({
      size: 44
    })
    expect(wrapper.find('span').hasClass('color-number__size--44')).toBe(true)
  })

  it('has fontsize set to `62` ', () => {
    wrapper.setProps({
      size: 62
    })
    expect(wrapper.find('span').hasClass('color-number__size--62')).toBe(true)
  })

  it('has success variant', () => {
    expect(wrapper.find('span').hasClass('color-number__color--success')).toBe(
      true
    )
  })

  it('has warning variant', () => {
    wrapper.setProps({
      variant: 'warning'
    })
    expect(wrapper.find('span').hasClass('color-number__color--warning')).toBe(
      true
    )
  })

  it('has alert variant', () => {
    wrapper.setProps({
      variant: 'alert'
    })
    expect(wrapper.find('span').hasClass('color-number__color--alert')).toBe(
      true
    )
  })

  it('has progress variant', () => {
    wrapper.setProps({
      variant: 'progress'
    })
    expect(wrapper.find('span').hasClass('color-number__color--progress')).toBe(
      true
    )
  })

  it('has default variant', () => {
    wrapper.setProps({
      variant: 'default'
    })
    expect(wrapper.find('span').hasClass('color-number__color--default')).toBe(
      true
    )
  })

  it('has brand variant', () => {
    wrapper.setProps({
      variant: 'brand'
    })
    expect(wrapper.find('span').hasClass('color-number__color--brand')).toBe(
      true
    )
  })

  it('has white variant', () => {
    wrapper.setProps({
      variant: 'white'
    })
    expect(wrapper.find('span').hasClass('color-number__color--white')).toBe(
      true
    )
  })
})
