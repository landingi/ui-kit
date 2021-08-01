import React from 'react'
import { mount } from 'enzyme'
import Tabs from 'shared/components/ui/Tabs'
import Button from 'shared/components/ui/Button'

const props = {
  initialValue: 'test'
}
const tabsComponent = <Tabs {...props}> <Button> Test </Button></Tabs>

describe('<Tabs/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(tabsComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    console.log('debug', wrapper.debug())
    expect(wrapper.exists()).toBe(true)
  })
})
