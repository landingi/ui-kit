import React from 'react'
import { mount } from 'enzyme'
import Indicator from 'shared/components/ui/Indicator'
import registerIcons from 'shared/helpers/icons'

registerIcons()

const props = {
  children: 'Indicator'
}

const indicatorComponent = <Indicator {...props} />

describe('<Indicator/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(indicatorComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `indicator` class', () => {
    expect(wrapper.hasClass('indicator')).toBe(true)
  })

  it('is alert', () => {
    wrapper.setProps({
      isAlert: true
    })
    expect(wrapper.find('span').hasClass('is--alert')).toBe(true)
  })

  it('is not alert', () => {
    expect(wrapper.find('span').hasClass('is--alert')).toBe(false)
  })
})
