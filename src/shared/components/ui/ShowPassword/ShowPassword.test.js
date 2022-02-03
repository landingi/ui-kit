import React from 'react'
import ShowPassword from '@components/ui/ShowPassword'
import { mountWithIntl } from '@jestutils'

const component = <ShowPassword />

describe('<ShowPassword/> mount', () => {
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

  it('has `showpassword` class', () => {
    expect(wrapper.hasClass('showpassword')).toBe(true)
  })

  it('default prop `setHidden` should be undefined', () => {
    const result = ShowPassword.defaultProps.setHidden()

    expect(result).toBe(null)
  })

  it('has label show and eye icon', () => {
    wrapper.setProps({
      hasLabel: true
    })

    expect(wrapper.find('Button').text()).toEqual('word.show')
    expect(wrapper.find('Icon').prop('icon')).toEqual('icon-eye-close')
  })
})
