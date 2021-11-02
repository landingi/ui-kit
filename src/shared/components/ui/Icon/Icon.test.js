import React from 'react'
import { mount } from 'enzyme'
import Icon from '@components/ui/Icon'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  icon: 'ab-testing'
}

const component = <Icon {...props} />

describe('<Icon /> mount', () => {
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

  it('has `editor-icon` class', () => {
    expect(wrapper.find('i').hasClass('editor-icon')).toBe(true)
  })

  it('has `ab-testing` class', () => {
    expect(wrapper.find('i').hasClass('ab-testing')).toBe(true)
  })

  it('has `icon--default` class when color is default', () => {
    expect(wrapper.find('i').hasClass('icon--default')).toBe(true)
  })

  it('has `icon--primary` class when color is primary', () => {
    wrapper.setProps({
      color: 'primary'
    })

    expect(wrapper.find('i').hasClass('icon--primary')).toBe(true)
  })
})
