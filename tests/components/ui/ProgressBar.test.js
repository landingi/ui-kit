import React from 'react'
import { mount } from 'enzyme'
import ProgressBar from 'shared/components/ui/ProgressBar'

const progressBarComponent = (<ProgressBar
    quantity={58}
    variant="success"
                              />)

describe('<ProgressBar /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(progressBarComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has success variant', () => {
    expect(wrapper.find('span.bar__background').hasClass('bar--success')).toBe(
      true
    )
    expect(wrapper.find('span.bar__fulfillment').hasClass('bar--success')).toBe(
      true
    )
  })

  it('has warning variant', () => {
    wrapper.setProps({
      variant: 'warning'
    })
    expect(wrapper.find('span.bar__background').hasClass('bar--warning')).toBe(
      true
    )
    expect(wrapper.find('span.bar__fulfillment').hasClass('bar--warning')).toBe(
      true
    )
  })

  it('has alert variant', () => {
    wrapper.setProps({
      variant: 'alert'
    })
    expect(wrapper.find('span.bar__background').hasClass('bar--alert')).toBe(
      true
    )
    expect(wrapper.find('span.bar__fulfillment').hasClass('bar--alert')).toBe(
      true
    )
  })
})
