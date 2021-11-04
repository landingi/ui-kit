import React from 'react'
import { mount } from 'enzyme'
import DropdownSelect from '@components/ui/DropdownSelect'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  children: 'children',
  options: [
    {
      label: 'jestem label',
      value: 'jestem value'
    }
  ]
}

const dropdownComponent = <DropdownSelect {...props} />

describe('<DropdownSelect /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(dropdownComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null })

    expect(wrapper.exists()).toBe(true)
  })

  it('has default prop label with value empty string', () => {
    expect(wrapper.prop('label')).toEqual('')
  })

  it('has default prop searchPlaceholder with value empty string', () => {
    expect(wrapper.prop('searchPlaceholder')).toEqual('')
  })

  it('has default prop inModalName with value empty string', () => {
    expect(wrapper.prop('inModalName')).toEqual('')
  })

  it('has default prop errors with value object', () => {
    expect(wrapper.prop('errors')).toEqual({})
  })

  it('has default prop touched with value object', () => {
    expect(wrapper.prop('touched')).toEqual({})
  })

  it('has default prop overflowStyle icon with value object', () => {
    expect(wrapper.prop('overflowStyle')).toEqual({})
  })

  it('has default prop emphasisedOptions size with value array', () => {
    expect(wrapper.prop('emphasisedOptions')).toEqual([])
  })

  it('has default handleOnSearchChange with value null', () => {
    expect(wrapper.prop('handleOnSearchChange')).toEqual(null)
  })

  it('has default prop value with value null', () => {
    expect(wrapper.prop('value')).toEqual(null)
  })

  it('has default prop liveChanges with value null', () => {
    expect(wrapper.prop('liveChanges')).toEqual(false)
  })

  it('has default prop optionalContent with value null', () => {
    expect(wrapper.prop('optionalContent')).toEqual(null)
  })

  it('has default prop dropdownLabel with value null', () => {
    expect(wrapper.prop('dropdownLabel')).toEqual(null)
  })

  it('has default prop className with value empty string', () => {
    expect(wrapper.prop('className')).toEqual('')
  })

  it('has default prop customValue with value null', () => {
    expect(wrapper.prop('customValue')).toEqual(false)
  })

  it('has default prop alwaysShowLabel with value null', () => {
    expect(wrapper.prop('alwaysShowLabel')).toEqual(false)
  })

  it('has default prop isOpenDisabled with value null', () => {
    expect(wrapper.prop('isOpenDisabled')).toEqual(false)
  })

  it('has default prop searchInOptions with value null', () => {
    expect(wrapper.prop('searchInOptions')).toEqual(false)
  })

  it('has default prop isLoading with value null', () => {
    expect(wrapper.prop('isLoading')).toEqual(false)
  })

  it('has default prop isEmptyList with value null', () => {
    expect(wrapper.prop('isEmptyList')).toEqual(false)
  })

  it('has default prop hasDescription with value null', () => {
    expect(wrapper.prop('hasDescription')).toEqual(false)
  })

  it('default prop `onBlur` should be undefined', () => {
    const result = DropdownSelect.defaultProps.onBlur()

    expect(result).toBe(null)
  })

  it('default prop `onChange` should be undefined', () => {
    const result = DropdownSelect.defaultProps.onChange()

    expect(result).toBe(null)
  })

  it('should have a label', () => {
    wrapper.setProps({
      label: 'Jestem labelem'
    })

    expect(wrapper.find('label').text()).toEqual(wrapper.prop('label'))
  })

  // it('on `click` state `isOpen` set to true', () => {
  //   wrapper.simulate('click')
  //   wrapper.update()

  //   expect(wrapper.find('.dropdown__body').length).toBe(1)
  // })

  // it('has `dropdown` class', () => {
  //   expect(wrapper.hasClass('dropdown')).toBe(true)
  // })
})
