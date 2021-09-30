import React from 'react'
import { mount } from 'enzyme'
import Alert from '@components/ui/Alert'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  children: 'Alert'
}

const alertComponent = (
  <Alert {...props}>{props.children}</Alert>
)

describe('<Alert /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(alertComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `alert-message` class', () => {
    expect(wrapper.hasClass('alert-message')).toBe(true)
  })

  it('is alert', () => {
    wrapper.setProps({
      type: 'alert'
    })
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('alert-message--alert')
    ).toBe(true)
  })

  it('is info', () => {
    wrapper.setProps({
      type: 'info'
    })
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('alert-message--info')
    ).toBe(true)
  })

  it('is success', () => {
    wrapper.setProps({
      type: 'success'
    })
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('alert-message--success')
    ).toBe(true)
  })

  it('is warning', () => {
    wrapper.setProps({
      type: 'warning'
    })
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('alert-message--warning')
    ).toBe(true)
  })
})
