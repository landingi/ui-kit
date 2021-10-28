import React from 'react'
import { mount } from 'enzyme'
import Checkbox from '@components/ui/Checkbox'

const props = {
  onChange: jest.fn(),
  checked: false
}

const component = <Checkbox {...props} />

describe('<Checkbox /> mount', () => {
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

  it('has `input__checkbox` class', () => {
    expect(wrapper.find('label').hasClass('input__checkbox')).toBe(true)
  })

  it('should have defined default prop classname with null value', () => {
    expect(wrapper.props().className).toEqual(null)
  })

  it('should have defined default prop disabled with false value', () => {
    expect(wrapper.props().disabled).toEqual(false)
  })

  it('should have defined default prop fomrikKey with null value', () => {
    expect(wrapper.props().formikKey).toEqual(null)
  })

  it('should have defined default prop checked', () => {
    expect(wrapper.props().checked).toBeDefined()
  })

  // it('has `ab-testing` class', () => {
  //   expect(wrapper.find('i').hasClass('ab-testing')).toBe(true)
  // })

  // it('has `icon--default` class when color is default', () => {
  //   expect(wrapper.find('i').hasClass('icon--default')).toBe(true)
  // })

  it('input has the name of formikKey prop', () => {
    wrapper.setProps({
      formikKey: 'test-key'
    })

    expect(wrapper.find('input').prop('name')).toEqual('test-key')
  })

  it('input by default is not checked', () => {
    wrapper.setProps({
      checked: false
    })

    expect(wrapper.find('input').prop('checked')).toEqual(false)
  })

  it('input is checked when prop checked has value true', () => {
    wrapper.setProps({
      checked: true
    })

    expect(wrapper.find('input').prop('checked')).toEqual(true)
  })
})
