import React from 'react'
import { mount } from 'enzyme'
import registerIcons from 'shared/helpers/icons'
import Drawer from 'shared/components/ui/Drawer'
import Backdrop from 'shared/components/ui/Backdrop'

registerIcons()
const props = {
  children: 'children',
  data: {
    title: 'Test title'
  },
  isActive: false
}
const drawerComponent = <Drawer {...props} />

describe('<Drawer/> global mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(drawerComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have defined default prop onClick', () => {
    expect(wrapper.props().onClick).toBeDefined()
  })

  it('should display backdrop when isActive', () => {
    wrapper.setProps({
      isActive: true
    })
    expect(wrapper.find(Backdrop).exists()).toBe(true)
  })
})
