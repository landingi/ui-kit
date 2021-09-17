import React from 'react'
import { mount, shallow } from 'enzyme'
import Notification from '@components/ui/Notification'
import Close from '@components/ui/Close'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  children: 'Notification'
}

const mockFn = jest.fn()

const notificationComponent = (
  <Notification {...props}>
    {props.children}

    <Close onClick={mockFn} />
  </Notification>
)

describe('<Notification/> shallow', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(notificationComponent)
  })

  it('calls function passed as onClick prop on `<Close />` click event`', () => {
    wrapper.find(Close).simulate('click')
    expect(mockFn).toHaveBeenCalled()
  })
})

describe('<Notification/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(notificationComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `notification` class', () => {
    expect(wrapper.hasClass('notification')).toBe(true)
  })

  it('close exists', () => {
    expect(wrapper.find(Close).exists()).toBe(true)
  })

  it('is alert', () => {
    wrapper.setProps({
      type: 'alert'
    })
    expect(
      wrapper
        .find('div.notification--alert')
        .hasClass('notification--alert')
    ).toBe(true)
  })

  it('is info', () => {
    wrapper.setProps({
      type: 'info'
    })
    expect(
      wrapper
        .find('div.notification--info')
        .hasClass('notification--info')
    ).toBe(true)
  })

  it('is success', () => {
    wrapper.setProps({
      type: 'success'
    })
    expect(
      wrapper
        .find('div.notification--success')
        .hasClass('notification--success')
    ).toBe(true)
  })

  it('is warning', () => {
    wrapper.setProps({
      type: 'warning'
    })
    expect(
      wrapper
        .find('div.notification--warning')
        .hasClass('notification--warning')
    ).toBe(true)
  })

  it('is pending', () => {
    wrapper.setProps({
      type: 'warning'
    })
    expect(
      wrapper
        .find('div.notification--warning')
        .hasClass('notification--warning')
    ).toBe(true)
  })

  it('when `isClosable` `<Close/> is visible', () => {
    wrapper.setProps({
      isClosable: true
    })
    expect(wrapper.find('span.close').exists()).toBe(true)
  })

  it('when `isClosable` `<Close/> is visible', () => {
    wrapper.setProps({
      isClosable: true
    })
    expect(wrapper.find('span.close').exists()).toBe(true)
  })

  it('should have defined default prop onClick', () => {
    expect(Notification.defaultProps.onClick).toBeDefined()
  })

  it('default prop `onClick` should be null', () => {
    const result = Notification.defaultProps.onClick()
    expect(result).toBe(null)
  })
})
