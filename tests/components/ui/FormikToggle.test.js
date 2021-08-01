import React from 'react'
import FormikToggle from '@components/ui/Form2/Toggle'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'

const onChange = jest.fn()

const props = {
  field: {
    name: 'Toggle',
    value: false,
    onChange: onChange
  },
  form: { touched: {} },
  disabled: false,
  id: '141414',
  label: 'word.lead'
}

const toggleComponent = <FormikToggle {...props} />

describe('<FormikToggle /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(toggleComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('calls function passed as onChange prop on change event', () => {
    wrapper.find('input').simulate('change')

    expect(onChange).toHaveBeenCalled()
  })

  it('should set the name', () => {
    wrapper.setProps({
      field: {
        name: 'name-test',
        value: false
      }
    })

    expect(wrapper.find('input').prop('name')).toBe('name-test')
  })

  it('should set the set custom attributes on the input', () => {
    wrapper.setProps({
      disabled: true
    })

    expect(wrapper.prop('disabled')).toBe(true)
  })

  it('should set disabled attribute on the input', () => {
    wrapper.setProps({
      disabled: true
    })

    expect(wrapper.prop('disabled')).toBe(true)
  })

  it('should set readolnly attribute on the input', () => {
    wrapper.setProps({
      readonly: true
    })

    expect(wrapper.prop('readonly')).toBe(true)
  })

  it('should render label', () => {
    wrapper.setProps({
      label: 'null'
    })

    expect(wrapper.find('label').exists()).toBe(true)
  })
})
