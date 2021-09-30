import React from 'react'
import { mount } from 'enzyme'
import ColorNumber from '@components/ui/ColorNumber'

const colorNumberComponent = (
  <ColorNumber variant="success">5</ColorNumber>
)

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

  it('has fontsize set to `18` ', () => {
    expect(
      wrapper
        .find('span')
        .hasClass('color-number__size--18')
    ).toBe(true)
  })

  it('has success variant', () => {
    expect(
      wrapper
        .find('span')
        .hasClass('color-number__color--success')
    ).toBe(true)
  })

  it('has warning variant', () => {
    wrapper.setProps({
      variant: 'warning'
    })
    expect(
      wrapper
        .find('span')
        .hasClass('color-number__color--warning')
    ).toBe(true)
  })

  it('has alert variant', () => {
    wrapper.setProps({
      variant: 'alert'
    })
    expect(
      wrapper
        .find('span')
        .hasClass('color-number__color--alert')
    ).toBe(true)
  })
})
