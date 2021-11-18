import React from 'react'
import { mount } from 'enzyme'
import Tabs from '@components/ui/Tabs/Tabs'
import TabList from '@components/ui/Tabs/TabList'
import Tab from '@components/ui/Tabs/Tab'
import TabPanel from '@components/ui/Tabs/TabPanel'

const props = {
  initialValue: 'predefined'
}

const tabsComponent = (
  <Tabs {...props}>
    <TabList>
      <Tab name='predefined'>
        <span> Some text</span>
      </Tab>
    </TabList>

    <TabPanel name='predefined'>Tab Panel content</TabPanel>
  </Tabs>
)

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

  it('default prop `onClick` should be null', () => {
    const result = Tab.defaultProps.onClick()

    expect(result).toBe(null)
  })
})
