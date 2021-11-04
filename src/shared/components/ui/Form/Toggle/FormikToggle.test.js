import React from 'react'
import { mount } from 'enzyme'
import FormikToggle from '@components/ui/Form/Toggle/FormikToggle'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  id: 'jestem-id',
  field: {
    name: 'field-name',
    value: true,
    onChange: jest.fn(),
    onBlur: jest.fn()
  },
  form: {
    errors: {},
    touched: {},
    setFieldValue: jest.fn()
  }
}

const component = <FormikToggle {...props} />

describe('<FormikToggle /> mount', () => {
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
})
