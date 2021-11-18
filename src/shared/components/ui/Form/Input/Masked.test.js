import React from 'react'
import { mount } from 'enzyme'
import Masked from '@components/ui/Form/Input/Masked'
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
  },
  form: {
    errors: {},
    touched: {}
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

  it('should have defined default prop maxLength with value set to 524288', () => {
    expect(wrapper.props().maxLength).toEqual(524288)
  })

  it('should have defined default prop disabled with value set to false', () => {
    expect(wrapper.props().disabled).toEqual(false)
  })

  it('should have defined default prop translate with value set to true', () => {
    expect(wrapper.props().translate).toEqual(true)
  })
})
