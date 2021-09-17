import React from 'react'
import { mount } from 'enzyme'
import Layout from '@components/ui/Layout'

const props = {
  children: 'placeholder'
}

const LayoutComponent = (
  <Layout {...props}>{props.children}</Layout>
)

describe('<Layout/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(LayoutComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `layout` class', () => {
    expect(wrapper.find('div').hasClass('layout')).toBe(
      true
    )
  })

  it('should have defined default prop width', () => {
    expect(Layout.defaultProps.width).toBeDefined()
  })

  it('has `layout-width--full` class', () => {
    expect(
      wrapper.find('div').hasClass('layout-width--full')
    ).toBe(true)
  })
})
