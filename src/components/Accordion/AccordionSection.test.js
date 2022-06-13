import React from 'react'
import { mount } from 'enzyme'
import AccordionSection from '@components/Accordion/AccordionSection'

const props = {
  handleOnClick: jest.fn(),
  label: 'Test Label'
}
const component = <AccordionSection {...props} />

describe('<AccordionSection /> mount', () => {
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

  it('has label next to the arrow', () => {
    wrapper.setProps({
      isOpen: true,
      children: 'children content',
      arrowLabel: 'I am just an arrow label'
    })

    expect(
      wrapper
        .find('span.accordion__header-arrow')
        .hasClass('accordion__header-arrow')
    ).toBe(true)
    expect(wrapper.find('span.accordion__header-arrow').text()).toEqual(
      wrapper.prop('arrowLabel')
    )
  })

  it('when is open it has icon chevron up', () => {
    wrapper.setProps({
      isOpen: true,
      children: 'children content',
      arrowLabel: 'I am just an arrow label'
    })

    expect(wrapper.find('Icon').prop('icon')).toEqual('icon-chevron-up')
  })

  it('when is not open it has icon chevron down', () => {
    wrapper.setProps({
      isOpen: false,
      children: 'children content',
      arrowLabel: 'I am just an arrow label'
    })

    expect(wrapper.find('Icon').prop('icon')).toEqual('icon-chevron-down')
  })
})
