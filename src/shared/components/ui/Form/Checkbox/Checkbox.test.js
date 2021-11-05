import React from 'react'
import { mount } from 'enzyme'
import Checkbox from '@components/ui/Form/Checkbox'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  id: 'jestem-id',
  field: {
    name: 'field-name'
  },
  form: {
    errors: {},
    touched: {}
  }
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

  it('has default prop `className` with empty string', () => {
    expect(wrapper.prop('className')).toEqual('')
  })

  it('has default prop `label` with value null', () => {
    expect(wrapper.prop('label')).toEqual('')
  })

  it('has default prop `type` with value checkbox', () => {
    expect(wrapper.prop('type')).toEqual('checkbox')
  })

  it('has class `checkbox-container`', () => {
    expect(
      wrapper.find('div.checkbox-container').hasClass('checkbox-container')
    ).toBe(true)
  })

  it('has label with class `checkbox__input`', () => {
    expect(
      wrapper.find('label.checkbox__input').hasClass('checkbox__input')
    ).toBe(true)
  })

  it('has label below input with class `checkbox__label`', () => {
    wrapper.setProps({
      label: 'jestem sobie labelem'
    })

    expect(
      wrapper.find('label.checkbox__label').hasClass('checkbox__label')
    ).toBe(true)
    expect(wrapper.find('label.checkbox__label').text()).toEqual(
      wrapper.prop('label')
    )
  })
})
