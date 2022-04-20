import React from 'react'
import Headline from '@components/global/Headline'
import { mount } from 'enzyme'

const component = <Headline title='Headline title' />

describe('<Headline/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(component)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has title', () => {
    expect(wrapper.find('div').text()).toMatch(/Headline title/i)
  })

  it('has class name page__headline', () => {
    expect(wrapper.find('div').hasClass('page__headline')).toBe(true)
  })
})
