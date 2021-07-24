import React from 'react'
import { mount } from 'enzyme'
import Back from 'shared/components/ui/Back'
import registerIcons from 'shared/helpers/icons'

registerIcons()

const props = {
  children: 'test'
}

const backComponent = <Back {...props} />

describe('<Back/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(backComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `back` class', () => {
    expect(wrapper.hasClass('back')).toBe(true)
  })
})
