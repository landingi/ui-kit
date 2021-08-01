import React from 'react'
import { mount } from 'enzyme'
import CustomLink from '@components/ui/CustomLink'
import registerIcons from 'shared/helpers/icons'

registerIcons()

const CustomLinkComponent = (<CustomLink
    href="foo.com"
    label="active"
                             />)

describe('<CustomLink /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CustomLinkComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `custom-link` class', () => {
    expect(wrapper.hasClass('custom-link')).toBe(true)
  })

  it('has active variant', () => {
    expect(wrapper.children().hasClass('custom-link--active')).toBe(true)
  })

  it('has inactive variant', () => {
    wrapper.setProps({
      variant: 'inactive'
    })
    expect(wrapper.children().hasClass('custom-link--inactive')).toBe(true)
  })

  it('has dark variant', () => {
    wrapper.setProps({
      variant: 'dark'
    })
    expect(wrapper.children().hasClass('custom-link--dark')).toBe(true)
  })

  it('has font-size: 14', () => {
    expect(wrapper.children().hasClass('custom-link--14')).toBe(true)
  })

  it('has font-size: 16', () => {
    wrapper.setProps({
      size: 16
    })

    expect(wrapper.children().hasClass('custom-link--16')).toBe(true)
  })
})
