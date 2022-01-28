import React from 'react'
import { mount } from 'enzyme'
import Section from '@components/ui/Accordion/Section'

const props = {
  handleOnClick: jest.fn(),
  label: 'Test Label',
  children: 'I am just children element'
}
const component = <Section {...props} />

describe('<Section /> mount', () => {
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

  it('calls function passed as handleOnClick prop on click event', () => {
    wrapper.find('div.accordion__header').simulate('click')

    expect(wrapper.prop('handleOnClick')).toHaveBeenCalled()
  })

  it('has label', () => {
    wrapper.setProps({
      label: 'label content'
    })

    expect(
      wrapper.find('div.accordion__header').hasClass('accordion__header')
    ).toBe(true)
    expect(wrapper.find('div.accordion__header').text()).toEqual(
      wrapper.prop('label')
    )
  })

  it('has children', () => {
    wrapper.setProps({
      isOpen: true,
      children: 'children content'
    })

    expect(
      wrapper.find('div.accordion__text').hasClass('accordion__text')
    ).toBe(true)
    expect(wrapper.find('div.accordion__text').text()).toEqual(
      wrapper.prop('children')
    )
  })
})
