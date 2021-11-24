import React from 'react'
import { mount } from 'enzyme'
import { Toggle } from '@components/ui/Form/Toggle/Toggle'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  id: 'jestem-id',
  name: 'field-name',
  onChange: jest.fn(),
  checked: false
}

const component = <Toggle {...props} />

describe('<Toggle /> mount', () => {
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

  it('default prop `onBlur` should be undefined', () => {
    const result = Toggle.defaultProps.onBlur()

    expect(result).toBe(null)
  })
})
