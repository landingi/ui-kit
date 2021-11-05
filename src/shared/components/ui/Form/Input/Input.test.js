import React from 'react'
import { mount } from 'enzyme'
import Input from '@components/ui/Form/Input'
import registerIcons from '@helpers/icons'

registerIcons()

const mockedOnChange = jest.fn()
const mockedOnKeyDown = jest.fn()
const mockedOnBlur = jest.fn()

const props = {
  id: 'jestem-id',
  field: {
    name: 'field-name'
  },
  form: {
    errors: {},
    touched: {}
  },
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

  it('has `form-field` class', () => {
    expect(wrapper.find('div.form-field').hasClass('form-field')).toBe(true)
  })

  // it('default prop `onChange` should be null', () => {
  //   const result = Input.defaultProps.onChange()

  //   expect(result).toBe(null)
  // })

  // it('default prop `onKeyDown` should be null', () => {
  //   const result = Input.defaultProps.onKeyDown()

  //   expect(result).toBe(null)
  // })

  // it('default prop `onBlur` should be null', () => {
  //   const result = Input.defaultProps.onBlur()

  //   expect(result).toBe(null)
  // })

  // it('calls function passed as onChange prop on click event', () => {
  //   wrapper
  //     .find('input')
  //     .simulate('change', { target: { name: 'input-name', value: 'test' } })

  //   expect(mockedOnChange).toHaveBeenCalled()
  // })

  // it('calls function passed as onKeyDown prop on click event', () => {
  //   wrapper.find('input').simulate('keydown', { keyCode: 13 })

  //   expect(mockedOnKeyDown).toHaveBeenCalled()
  // })

  // it('calls function passed as onBlur prop on click event', () => {
  //   wrapper.find('input').simulate('blur')

  //   expect(mockedOnBlur).toHaveBeenCalled()
  // })

  // it('should have defined default prop onChange', () => {
  //   expect(wrapper.props().onChange).toBeDefined()
  // })

  // it('should have defined default prop onKeyDown', () => {
  //   expect(wrapper.props().onKeyDown).toBeDefined()
  // })

  // it('should have defined default prop onBlur', () => {
  //   expect(wrapper.props().onBlur).toBeDefined()
  // })

  // it('should have defined default prop className with value set to input', () => {
  //   expect(wrapper.props().className).toEqual('input')
  // })

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

  it('should have defined default prop disabled with value set to false', () => {
    expect(wrapper.props().disabled).toEqual(false)
  })

  it('should have defined default prop autoFocus with value set to false', () => {
    expect(wrapper.props().autoFocus).toEqual(false)
  })

  it('should have defined default prop required with value set to true', () => {
    expect(wrapper.props().required).toEqual(true)
  })

  it('should be disabled', () => {
    wrapper.setProps({
      disabled: true
    })

    expect(wrapper.find('input').prop('disabled')).toBe(true)
  })
})
