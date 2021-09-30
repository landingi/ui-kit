import React from 'react'
import { mount } from 'enzyme'
import ColorLine from '@components/ui/ColorLine'

const colorLineComponent = <ColorLine variant='success' />

describe('<ColorLine /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(colorLineComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has verical align', () => {
    expect(wrapper.prop('alignment')).toBe('vertical')
    expect(
      wrapper.find('span').hasClass('color-line--vertical')
    ).toBe(true)
  })

  it('has horizontal align', () => {
    wrapper.setProps({
      alignment: 'horizontal'
    })
    expect(wrapper.prop('alignment')).toBe('horizontal')
    expect(
      wrapper
        .find('span')
        .hasClass('color-line--horizontal')
    ).toBe(true)
  })

  it('has success variant', () => {
    expect(
      wrapper.find('span').hasClass('color-line--success')
    ).toBe(true)
  })

  it('has warning variant', () => {
    wrapper.setProps({
      variant: 'warning'
    })
    expect(
      wrapper.find('span').hasClass('color-line--warning')
    ).toBe(true)
  })

  it('has alert variant', () => {
    wrapper.setProps({
      variant: 'alert'
    })
    expect(
      wrapper.find('span').hasClass('color-line--alert')
    ).toBe(true)
  })
})
