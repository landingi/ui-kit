import React from 'react'
import { mount } from 'enzyme'
import Input from '@components/ui/Input'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  onChange: jest.fn(),
  onKeyDown: () => jest.fn(),
  onBlur: () => jest.fn()
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

  it('should have defined default prop required with value set to true', () => {
    expect(wrapper.props().required).toEqual(true)
  })

  it('should have defined default prop hideArrows with value set to false', () => {
    expect(wrapper.props().hideArrows).toEqual(false)
  })

  it('should have defined default prop i18', () => {
    expect(wrapper.props().i18n).toEqual({
      placeholder: null,
      label: null
    })
  })

  it('has tooltip and exclamation icon', () => {
    wrapper.setProps({
      tooltip: 'some tooltip content'
    })

    expect(wrapper.find('Tooltip').prop('content')).toEqual('some tooltip content')
    expect(wrapper.find('Tooltip').children().find('FontAwesomeIcon').prop('color')).toEqual('#2550AA')
    expect(wrapper.find('Tooltip').children().find('FontAwesomeIcon').prop('icon')).toEqual('exclamation-circle')
  })

  it('has no tooltip', () => {
    wrapper.setProps({
      tooltip: ''
    })

    expect(wrapper.find('Tooltip').exists()).toBe(false)
  })
})
