import React from 'react'
import { mount } from 'enzyme'
import TimeSelect from '@components/ui/TimeSelect'
import TimeInput from 'react-advanced-time-input'
import registerIcons from '@helpers/icons'

registerIcons()

const mockOnChange = jest.fn().mockName('onChange')

const props = {
  onChange: mockOnChange,
  label: 'Time select'
}

const timeComponent = <TimeSelect {...props} />

describe('<TimeSelect/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(timeComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('default prop `value` should be "12:00"', () => {
    const result = TimeSelect.defaultProps.value

    expect(result).toBe('12:00')
  })
  it('default prop `formikKey` should be null', () => {
    const result = TimeSelect.defaultProps.formikKey

    expect(result).toBe(null)
  })
  it('default prop `disabled` should be false', () => {
    const result = TimeSelect.defaultProps.disabled

    expect(result).toBe(false)
  })
  it('has proper label', () => {
    const label = wrapper.find('label')

    expect(label.text()).toBe('Time select')
  })
  it('call onChange when input change for PM', async () => {
    await wrapper.find(TimeInput).invoke('onChange')(null, '09:27')

    expect(mockOnChange).toBeCalledWith('21:27')
  })

  it('not call onChange when disabled', async () => {
    wrapper.setProps({
      disabled: true
    })

    await wrapper.find(TimeInput).invoke('onChange')(null, '09:26')

    expect(mockOnChange).toBeCalledTimes(1)
  })

  it('call onChange when formikKey is selected', async () => {
    wrapper.setProps({
      formikKey: 'example.key'
    })

    await wrapper.find(TimeInput).invoke('onChange')(null, '22:10')

    expect(mockOnChange).toHaveBeenLastCalledWith('22:10')
  })
})
