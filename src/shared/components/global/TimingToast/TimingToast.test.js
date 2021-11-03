import React from 'react'
import TimingToast from '@components/global/TimingToast'
import { mount } from 'enzyme'
import registerIcons from '@helpers/icons'
import { emitTimingToastToggle } from '@events/toast'
import { act } from 'react-dom/test-utils'

registerIcons()

const component = <TimingToast />

describe('<TimingToast/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(component)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should be active after emitting event', async () => {
    await act(async () => {
      emitTimingToastToggle()
    })

    wrapper.update()

    expect(wrapper.find(TimingToast).exists()).toBe(true)
  })

  it('has class name toast', async () => {
    await act(async () => {
      emitToastToggle()
    })

    wrapper.update()

    expect(wrapper.find(Toast).hasClass('toast')).toBe(true)
  })
})
