import React from 'react'
import { mount } from 'enzyme'
import Radio from '@components/ui/Form/Radio'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  id: 'jestem-id',
  field: {
    name: 'field-name',
    value: 'some-value',
    onChange: jest.fn()
  },
  form: {
    errors: {},
    touched: {}
  }
}

const component = <Radio {...props} />

describe('<Radio /> mount', () => {
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
    expect(wrapper.prop('className')).toEqual('input__radio')
  })

  it('has default prop `label` with value null', () => {
    expect(wrapper.prop('label')).toEqual('')
  })

  it('has default prop `type` with value radio', () => {
    expect(wrapper.prop('type')).toEqual('radio')
  })

  it('has class `checkbox-container`', () => {
    expect(wrapper.find('label').exists()).toBe(true)
  })
})
