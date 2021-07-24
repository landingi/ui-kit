import React from 'react'
import { mount } from 'enzyme'
import Label from 'shared/components/ui/Label'

const props = {
  children: 'label'
}

const labelComponent = <Label {...props} />

describe('<Label/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(labelComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `label` class', () => {
    expect(wrapper.hasClass('label')).toBe(true)
  })
})
