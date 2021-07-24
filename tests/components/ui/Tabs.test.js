import React from 'react'
import { mount } from 'enzyme'
import { Tabs } from 'shared/components/ui/Tabs'

const props = {
  initialValue: 'test'
}
const tabsComponent = (<Tabs {...props}>
    Children
  </Tabs>)

describe('<Tabs/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(tabsComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
