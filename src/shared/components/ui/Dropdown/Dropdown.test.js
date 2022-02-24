import React from 'react'
import { mount } from 'enzyme'
import Dropdown from '@components/ui/Dropdown'

const props = {
  children: 'children'
}

const dropdownComponent = <Dropdown {...props}>{props.children}</Dropdown>

describe('<Dropdown/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(dropdownComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has default prop offset with value 5', () => {
    expect(wrapper.prop('offset')).toEqual(5)
  })

  it('has default prop label with value null', () => {
    expect(wrapper.prop('label')).toEqual(null)
  })

  it('has default prop icon with value null', () => {
    expect(wrapper.prop('icon')).toEqual(null)
  })

  it('has default tooltip icon with value empty string', () => {
    expect(wrapper.prop('tooltip')).toEqual('')
  })

  it('has default tooltipPlacement icon with value empty string', () => {
    expect(wrapper.prop('tooltipPlacement')).toEqual('')
  })

  it('has default size size with value medium', () => {
    expect(wrapper.prop('size')).toEqual('medium')
  })

  it('has default hasArrow with value true', () => {
    expect(wrapper.prop('arrowType')).toEqual('caret')
  })

  it('has default alignment with value center', () => {
    expect(wrapper.prop('alignment')).toEqual('center')
  })

  it('has default dropdownPlacement with value center', () => {
    expect(wrapper.prop('dropdownPlacement')).toEqual('left')
  })

  it('default prop `handleOnClick` should be null', () => {
    const result = Dropdown.defaultProps.handleOnClick()

    expect(result).toBe(null)
  })

  it('default prop `handleOnOpen` should be null', () => {
    const result = Dropdown.defaultProps.handleOnOpen()

    expect(result).toBe(null)
  })

  it('default prop `handleOnClose` should be null', () => {
    const result = Dropdown.defaultProps.handleOnClose()

    expect(result).toBe(null)
  })

  it('has default hasArrow with value true', () => {
    expect(wrapper.prop('hasArrow')).toEqual(true)
  })

  it('has default link icon with value empty string', () => {
    expect(wrapper.prop('link')).toEqual('')
  })

  it('has default renderAsSmaller with value false', () => {
    expect(wrapper.prop('renderAsSmaller')).toEqual(false)
  })

  it('has default hasInput with value false', () => {
    expect(wrapper.prop('hasInput')).toEqual(false)
  })

  it('has default hasFullInputStyle with value false', () => {
    expect(wrapper.prop('hasFullInputStyle')).toEqual(false)
  })

  it('has default asPlaceholder with value false', () => {
    expect(wrapper.prop('asPlaceholder')).toEqual(false)
  })

  it('has default button with value false', () => {
    expect(wrapper.prop('button')).toEqual(false)
  })

  it('has default custom with value false', () => {
    expect(wrapper.prop('custom')).toEqual(null)
  })

  it('has default isOpenDisabled with value false', () => {
    expect(wrapper.prop('isOpenDisabled')).toEqual(false)
  })

  it('on `click` state `isOpen` set to true', () => {
    wrapper.simulate('click')
    wrapper.update()

    expect(wrapper.find('.dropdown__body').length).toBe(1)
  })
})
