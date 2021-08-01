import React from 'react'
import { mount } from 'enzyme'
import { Toggle } from '@components/ui/Form2/Toggle'

const onChange = jest.fn()

const props = {
  name: 'Toggle',
  onChange: onChange,
  disabled: false,
  checked: false,
  id: '141414'
}

const toggleComponent = <Toggle {...props} />

describe('<Toggle /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(toggleComponent)
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
      name: 'name-test'
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
      label: 'label'
    })

    expect(wrapper.find('label').exists()).toBe(true)
  })
})
