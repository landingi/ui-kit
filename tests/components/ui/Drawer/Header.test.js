import React from 'react'
import { mount } from 'enzyme'
import Header from '@components/ui/Drawer/Header'
import registerIcons from '@helpers/icons'

registerIcons()

const onClick = jest.fn()

const props = {
  children: 'Placeholder',
  onClick: onClick,
  hasClose: true,
  title: 'Some title'
}

const drawerComponent = (
  <Header {...props}>{props.children}</Header>
)

let wrapper

beforeEach(() => {
  wrapper = mount(drawerComponent)
})

afterEach(() => {
  wrapper.unmount()
})

describe('<Drawer/> <Header/> mount', () => {
  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `drawer__header` class', () => {
    expect(wrapper.hasClass('drawer__header')).toBe(true)
  })

  it('calls function passed as onClick prop on click event in `<Close/>`', () => {
    wrapper.find('span.close').simulate('click')

    expect(onClick).toHaveBeenCalled()
  })

  it('should have defined default prop onClick', () => {
    expect(Header.defaultProps.onClick).toBeDefined()
  })

  it('default prop `onClick` should be null', () => {
    const result = Header.defaultProps.onClick()
    expect(result).toBe(null)
  })
})
