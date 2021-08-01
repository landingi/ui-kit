import React from 'react'
import { mount } from 'enzyme'
import Dropdown from '@components/ui/Dropdown'
import registerIcons from 'shared/helpers/icons'

registerIcons()

const props = {
  children: 'children',
  offset: 5,
  label: 'label'
}

const dropdownComponent = (<Dropdown {...props}>
    {props.children}
</Dropdown>)

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

  it('on `click` state `isOpen` set to true', () => {
    wrapper.simulate('click')
    expect(wrapper.state('isOpen')).toBe(true)
  })

  it('has `dropdown` class', () => {
    expect(wrapper.hasClass('dropdown')).toBe(true)
  })
})
