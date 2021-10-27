import React from 'react'
import Toast from '@components/global/Toast'
import Notification from '@components/ui/Notification'
import { mount } from 'enzyme'
import registerIcons from '@helpers/icons'
import { emitToastToggle } from '@events/toast'
import { act } from 'react-dom/test-utils'

registerIcons()

// const setIsActive = jest.fn()
// const setMessage = jest.fn()
// const setHideTimeout = jest.fn()
// const setType = jest.fn()

const component = (
  <Toast>
    <Notification>Children</Notification>
  </Toast>
)

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
})


