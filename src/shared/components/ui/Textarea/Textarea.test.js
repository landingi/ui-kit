import React from 'react'
import { mount } from 'enzyme'
import Textarea from '@components/ui/Textarea'

const props = {
  value: 'initial value',
  onChange: jest.fn(),
  i18n: {
    placeholder: 'textarea placeholder'
  }
}

const TextareaComponent = <Textarea {...props} />

describe('<Textarea/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TextareaComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has value passed as prop', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(props.value)
  })

  it('has placeholder passed as prop', () => {
    expect(wrapper.find('textarea').prop('placeholder')).toEqual(
      props.i18n.placeholder
    )
  })

  it('should call onChange handler ', () => {
    wrapper.find('textarea').simulate('change')

    expect(props.onChange).toHaveBeenCalled()
  })
})
