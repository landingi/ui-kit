import React from 'react'
import { mount } from 'enzyme'
import RadioGroup from '@components/ui/Form/Radio/Group'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  name: 'nazwa-pola',
  children: 'jestem dzieckiem radio',
  errors: {},
  touched: {}
}

const component = <RadioGroup {...props} />

describe('<RadioGroup /> mount', () => {
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

  it('has default prop `label` with value null', () => {
    expect(wrapper.prop('label')).toEqual('')
  })

  it('has label', () => {
    wrapper.setProps({
      label: 'mam label'
    })

    expect(wrapper.find('label').exists()).toBe(true)
    expect(wrapper.find('label').text()).toEqual(wrapper.prop('label'))
  })
})
