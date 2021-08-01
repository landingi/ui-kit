import React from 'react'
import { mount } from 'enzyme'
import Legend from '@components/ui/Legend'

const props = {
  data: [
    { range: '0 - 20', variant: 'success' },
    { range: '20 - 59', variant: 'warning' },
    { range: '60 - 100', variant: 'alert' }
  ]
}

const legendComponent = <Legend {...props} />

describe('<Legend/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(legendComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has verical align', () => {
    expect(wrapper.prop('alignment')).toBe('vertical')
    expect(wrapper.find('div').hasClass('container--vertical')).toBe(true)
  })

  it('has horizontal align', () => {
    wrapper.setProps({
      alignment: 'horizontal'
    })
    expect(wrapper.prop('alignment')).toBe('horizontal')
    expect(wrapper.find('div').hasClass('container--horizontal')).toBe(true)
  })

  it('has one success variant', () => {
    expect(
      wrapper.find('span.legend--success').hasClass('legend--success')
    ).toBe(true)
  })

  it('has one warning variant', () => {
    expect(
      wrapper.find('span.legend--warning').hasClass('legend--warning')
    ).toBe(true)
  })

  it('has one alert variant', () => {
    expect(wrapper.find('span.legend--alert').hasClass('legend--alert')).toBe(
      true
    )
  })
})
