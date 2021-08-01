import React from 'react'
import { mount } from 'enzyme'
import Heading from '@components/ui/Heading'

const props = {
  children: 'Heading placeholder',
  level: 1
}

const headingComponent = (<Heading {...props}>
    {props.children}
</Heading>)

describe('<Heading/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(headingComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `heading` class', () => {
    expect(wrapper.hasClass('heading')).toBe(true)
  })

  it('when prop `level 1`, has `h1` class', () => {
    wrapper.setProps({
      level: 1
    })
    expect(wrapper.find('span').hasClass('h1')).toBe(true)
  })

  it('when prop `level 2`, has `h2` class', () => {
    wrapper.setProps({
      level: 2
    })
    expect(wrapper.find('span').hasClass('h2')).toBe(true)
  })

  it('when prop `level 3`, has `h3` class', () => {
    wrapper.setProps({
      level: 3
    })
    expect(wrapper.find('span').hasClass('h3')).toBe(true)
  })

  it('when prop `level 4`, has `h4` class', () => {
    wrapper.setProps({
      level: 4
    })
    expect(wrapper.find('span').hasClass('h4')).toBe(true)
  })

  it('when prop `level 5`, has `h5` class', () => {
    wrapper.setProps({
      level: 5
    })
    expect(wrapper.find('span').hasClass('h5')).toBe(true)
  })

  it('when prop `level 6`, has `h6` class', () => {
    wrapper.setProps({
      level: 6
    })
    expect(wrapper.find('span').hasClass('h6')).toBe(true)
  })
})
