import React from 'react'
import { mount } from 'enzyme'
import Masked from '@components/ui/Input/Masked'
import registerIcons from '@helpers/icons'

registerIcons()

const mockedOnChange = jest.fn()
const mockedOnKeyDown = jest.fn()
const mockedOnBlur = jest.fn()
const props = {
  onChange: mockedOnChange,
  onKeyDown: mockedOnKeyDown,
  onBlur: mockedOnBlur,
  field: {
    name: 'test',
    value: 'test',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    translate: true
  }
}

const component = <Masked {...props} />

describe('<Masked /> mount', () => {
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

  it('has value of label in the placeholder prop', () => {
    expect(wrapper.exists()).toBe(true)
  })


  it('default prop `onChange` should be null', () => {
    const result = Masked.defaultProps.onChange()

    expect(result).toBe(null)
  })

  it('default prop `onKeyDown` should be null', () => {
    const result = Masked.defaultProps.onKeyDown()

    expect(result).toBe(null)
  })

  it('default prop `onBlur` should be null', () => {
    const result = Masked.defaultProps.onBlur()

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

  it('should have defined default prop className with value set to input', () => {
    expect(wrapper.props().className).toEqual('input')
  })

  it('should have defined default prop type with value set to text', () => {
    expect(wrapper.props().type).toEqual('text')
  })

  it('should have defined default prop focused with value set to false', () => {
    expect(wrapper.props().focused).toEqual('false')
  })

  it('should have defined default prop maxLength with value set to 524288', () => {
    expect(wrapper.props().maxLength).toEqual(524288)
  })

  it('should have defined default prop name with value set to null', () => {
    expect(wrapper.props().name).toEqual(null)
  })

  it('should have defined default prop value with value set to null', () => {
    expect(wrapper.props().value).toEqual(null)
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

  it('should have defined default prop translate with value set to true', () => {
    expect(wrapper.props().translate).toEqual(true)
  })
})
