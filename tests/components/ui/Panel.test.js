import React from 'react'
import { mount } from 'enzyme'
import Panel from '@components/ui/Panel'

const props = {
  children: 'placeholder'
}

const PanelComponent = (
  <Panel {...props}>{props.children}</Panel>
)

describe('<Panel/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PanelComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `panel` class', () => {
    expect(wrapper.find('div').hasClass('panel')).toBe(true)
  })
})
