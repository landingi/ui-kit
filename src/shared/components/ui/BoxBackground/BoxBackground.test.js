import React from 'react'
import { mountWithIntl } from '@jestutils'
import BoxBackground from '@components/ui/BoxBackground'

const props = {
  children: 'children',
  variant: ''
}

const component = <BoxBackground {...props} />

describe('<BoxBackground /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(component)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `boxBackground` class', () => {
    expect(wrapper.children().hasClass('boxBackground')).toBe(true)
  })

  it('has proper class name on success variant', () => {
    wrapper.setProps({
      variant: 'success'
    })

    expect(wrapper.children().hasClass('boxBackground--success')).toBe(true)
  })

  it('has proper class name on warning variant', () => {
    wrapper.setProps({
      variant: 'warning'
    })

    expect(wrapper.children().hasClass('boxBackground--warning')).toBe(true)
  })

  it('has proper class name on alert variant', () => {
    wrapper.setProps({
      variant: 'alert'
    })

    expect(wrapper.children().hasClass('boxBackground--alert')).toBe(true)
  })

  it('has proper class name on progress variant', () => {
    wrapper.setProps({
      variant: 'progress'
    })

    expect(wrapper.children().hasClass('boxBackground--progress')).toBe(true)
  })

  it('has proper class name on info variant', () => {
    wrapper.setProps({
      variant: 'info'
    })

    expect(wrapper.children().hasClass('boxBackground--info')).toBe(true)
  })
})
