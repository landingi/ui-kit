import React from 'react'
import Toast from '@components/global/Toast'
import Notification from '@components/ui/Notification'
import { mount } from 'enzyme'
import registerIcons from '@helpers/icons'
import { emitToastToggle } from '@events/toast'
import { act } from 'react-dom/test-utils'

registerIcons()

const props = {
  message: 'jestem tekstem do komponentu Notification'
}

const component = <Toast {...props} />

describe('<Toast/> mount', () => {
  let wrapper

  beforeEach(() => {
    act(() => {
      wrapper = mount(component)
    })
  })

  afterEach(() => {
    wrapper.unmount()

    jest.clearAllMocks()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should be active after emitting event', async () => {
    await act(async () => {
      emitToastToggle()
    })

    wrapper.update()

    expect(wrapper.find(Toast).exists()).toBe(true)
  })

  it('has class name toast', async () => {
    await act(async () => {
      emitToastToggle()
    })

    wrapper.update()

    expect(wrapper.find(Toast).hasClass('toast')).toBe(true)
  })

  it('has Notification', async () => {
    await act(async () => {
      emitToastToggle()
    })

    wrapper.update()

    expect(wrapper.find(Notification).exists()).toBe(true)
  })
})
