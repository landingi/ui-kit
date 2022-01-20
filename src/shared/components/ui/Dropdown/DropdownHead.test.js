import React from 'react'
import { mount } from 'enzyme'
import DropdownHead from '@components/ui/Dropdown/Head'

const props = {
  children: 'some children'
}

const dropdownComponent = <DropdownHead {...props} />

describe('<DropdownHead/> mount', () => {
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

  it('has children', () => {
    expect(wrapper.find('div').text()).toEqual(wrapper.prop('children'))
  })

  it('has `dropdown__head` class', () => {
    expect(wrapper.find('div').hasClass('dropdown__head')).toBe(true)
  })
})
