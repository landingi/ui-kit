import React from 'react'
import { mount } from 'enzyme'
import InfoBar from '@components/ui/InfoBar'

const props = {
  children: 'Info Bar'
}

const infoBarComponent = <InfoBar {...props}>{props.children}</InfoBar>

describe('<InfoBar /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(infoBarComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `info-bar` class', () => {
    expect(wrapper.find('div.info-bar').hasClass('info-bar')).toBe(true)
  })

  it('is alert', () => {
    wrapper.setProps({
      type: 'alert'
    })
    expect(
      wrapper.find('div.info-bar--alert').hasClass('info-bar--alert')
    ).toBe(true)
  })

  it('is info', () => {
    wrapper.setProps({
      type: 'info'
    })
    expect(wrapper.find('div.info-bar--info').hasClass('info-bar--info')).toBe(
      true
    )
  })

  it('is warning', () => {
    wrapper.setProps({
      type: 'warning'
    })
    expect(
      wrapper.find('div.info-bar--warning').hasClass('info-bar--warning')
    ).toBe(true)
  })
})
