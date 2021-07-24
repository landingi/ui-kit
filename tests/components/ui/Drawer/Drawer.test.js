import React from 'react'
import { mount } from 'enzyme'
import Drawer from 'shared/components/ui/Drawer'
import registerIcons from 'shared/helpers/icons'

registerIcons()

const onClick = jest.fn()

const props = {
  children: 'Placeholder',
  onClick: onClick,
  isActive: true,
  data: {
    title: 'title'
  }
}

const drawerComponent = (<Drawer {...props}>
    {props.children}
</Drawer>)

describe('<Drawer/> mount', () => {
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

  it('has `drawer` class', () => {
    expect(wrapper.hasClass('drawer')).toBe(true)
  })

  it('calls function passed as onClick prop on click event in `Backdrop`', () => {
    wrapper.find('div.backdrop').simulate('click')

    expect(onClick).toHaveBeenCalled()
  })

  it('calls function passed as onClick prop on click event in `Close`', () => {
    wrapper.find('span.close').simulate('click')

    expect(onClick).toHaveBeenCalled()
  })

  it('should have defined default prop onClick', () => {
    expect(Drawer.defaultProps.onClick).toBeDefined()
  })

  it('default prop `onClick` should be null', () => {
    const result = Drawer.defaultProps.onClick()
    expect(result).toBe(null)
  })
})
