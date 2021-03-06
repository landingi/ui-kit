import React from 'react'
import { mount } from 'enzyme'
import Input from '@components/Input'

const mockedOnChange = jest.fn()
const mockedOnKeyDown = jest.fn()
const mockedOnBlur = jest.fn()

const props = {
  onChange: mockedOnChange,
  onKeyDown: mockedOnKeyDown,
  onBlur: mockedOnBlur
}

const component = <Input {...props} />

describe('<Input /> mount', () => {
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

  it('has `input__wrapper` class', () => {
    expect(wrapper.find('div').hasClass('input__wrapper')).toBe(true)
  })

  it('default prop `onChange` should be null', () => {
    const result = Input.defaultProps.onChange()

    expect(result).toBe(null)
  })

  it('default prop `onKeyDown` should be null', () => {
    const result = Input.defaultProps.onKeyDown()

    expect(result).toBe(null)
  })

  it('default prop `onBlur` should be null', () => {
    const result = Input.defaultProps.onBlur()

    expect(result).toBe(null)
  })

  it('calls function passed as onChange prop on click event', () => {
    wrapper
      .find('input')
      .simulate('change', { target: { name: 'input-name', value: 'test' } })

    expect(mockedOnChange).toHaveBeenCalled()
  })

  it('calls function passed as onKeyDown prop on click event', () => {
    wrapper.find('input').simulate('keydown', { keyCode: 13 })

    expect(mockedOnKeyDown).toHaveBeenCalled()
  })

  it('calls function passed as onBlur prop on click event', () => {
    wrapper.find('input').simulate('blur')

    expect(mockedOnBlur).toHaveBeenCalled()
  })

  it('should have defined default prop onChange', () => {
    expect(wrapper.props().onChange).toBeDefined()
  })

  it('should have defined default prop onKeyDown', () => {
    expect(wrapper.props().onKeyDown).toBeDefined()
  })

  it('should have defined default prop onBlur', () => {
    expect(wrapper.props().onBlur).toBeDefined()
  })

  it('should have defined default prop type with value set to text', () => {
    expect(wrapper.props().type).toEqual('text')
  })

  it('should have defined default prop focused with value set to false', () => {
    expect(wrapper.props().focused).toEqual('false')
  })

  it('should have defined default prop tooltip with value set to empty string', () => {
    expect(wrapper.props().tooltip).toEqual('')
  })

  it('should have defined default prop background with value set to white', () => {
    expect(wrapper.props().background).toEqual('white')
  })

  it('should have defined default prop maxLength with value set to 524288', () => {
    expect(wrapper.props().maxLength).toEqual(524288)
  })

  it('should have defined default prop name with value set to null', () => {
    expect(wrapper.props().name).toEqual(null)
  })

  it('should have defined default prop value with value set to undefined', () => {
    expect(wrapper.props().value).toEqual(undefined)
  })
  it('should have defined default prop disabled with value set to false', () => {
    expect(wrapper.props().disabled).toEqual(false)
  })

  it('should have defined default prop readonly with value set to false', () => {
    expect(wrapper.props().readonly).toEqual(false)
  })

  it('should have defined default prop autoFocus with value set to false', () => {
    expect(wrapper.props().autoFocus).toEqual(false)
  })

  it('should have defined default prop required with value set to true', () => {
    expect(wrapper.props().required).toEqual(true)
  })

  it('should have defined default prop hideArrows with value set to false', () => {
    expect(wrapper.props().hideArrows).toEqual(false)
  })

  it('should have defined default prop i18', () => {
    expect(wrapper.props().i18n).toEqual({
      placeholder: null,
      label: null,
      description: null
    })
  })

  it('has tooltip and exclamation icon', () => {
    wrapper.setProps({
      tooltip: 'some tooltip content'
    })

    expect(wrapper.find('Tooltip').prop('content')).toEqual(
      'some tooltip content'
    )
    expect(
      wrapper.find('Tooltip').children().find('Icon').prop('color')
    ).toEqual('color-3')
    expect(
      wrapper.find('Tooltip').children().find('Icon').prop('icon')
    ).toEqual('icon-exclamation-circle')
  })

  it('has no tooltip', () => {
    wrapper.setProps({
      tooltip: ''
    })

    expect(wrapper.find('Tooltip').exists()).toBe(false)
  })

  it('should be readonly when is disabled', () => {
    wrapper.setProps({
      disabled: true,
      readonly: true
    })

    expect(wrapper.find('input').prop('readOnly')).toBe(true)
  })

  it('should be disabled', () => {
    wrapper.setProps({
      disabled: true
    })

    expect(wrapper.find('input').prop('disabled')).toBe(true)
  })

  it('should display label when has i18n.label', () => {
    wrapper.setProps({
      i18n: {
        label: 'I am your label'
      }
    })

    expect(wrapper.find('label').prop('className')).toEqual(
      'label label--normal input__label'
    )
  })

  it('should not display label when i18n.label is null', () => {
    wrapper.setProps({
      i18n: {
        label: null
      }
    })

    expect(wrapper.find('label').exists()).toBe(false)
  })

  it('should have min and max when type is number', () => {
    wrapper.setProps({
      type: 'number',
      min: 1,
      max: 10
    })

    expect(wrapper.find('input').prop('min')).toEqual(1)
    expect(wrapper.find('input').prop('max')).toEqual(10)
  })

  it('should not have --show-label when alwaysShowLabel is set on false', () => {
    wrapper.setProps({
      alwaysShowLabel: false
    })

    expect(wrapper.find('div').prop('className')).toEqual('input__wrapper')
  })

  it('should have --show-label when alwaysShowLabel is set on true', () => {
    wrapper.setProps({
      alwaysShowLabel: true
    })

    expect(wrapper.find('div').prop('className')).toEqual(
      'input__wrapper input__wrapper--show-label'
    )
  })
})
