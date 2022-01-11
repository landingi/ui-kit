import React from 'react'
import { mount } from 'enzyme'
import Select from '@components/ui/Form/Select'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  id: 'jestem-id',
  children: 'jestem dziecko',
  field: {
    name: 'field-name'
  },
  form: {
    errors: {},
    touched: {}
  }
}

const component = <Select {...props} />

describe('<Select /> mount', () => {
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

  it('has default prop `className` with value select-form', () => {
    expect(wrapper.prop('className')).toEqual('select-form')
  })

  it('has default prop `label` with value null', () => {
    expect(wrapper.prop('label')).toEqual('')
  })

  it('has class `form-field`', () => {
    expect(wrapper.find('div.form-field').hasClass('form-field')).toBe(true)
  })

  it('has wrapper with class `input__wrapper`', () => {
    expect(wrapper.find('div.input__wrapper').hasClass('input__wrapper')).toBe(
      true
    )
  })

  it('has label below input with class `input__label`', () => {
    wrapper.setProps({
      label: 'jestem sobie labelem'
    })

    expect(wrapper.find('label').hasClass('label')).toBe(true)
    expect(wrapper.find('label.input__label').text()).toEqual(
      wrapper.prop('label')
    )
  })
})
