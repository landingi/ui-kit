import React from 'react'
import TimingToast from '@components/global/TimingToast'
import { mount } from 'enzyme'
import { emitTimingToastToggle } from '@events/toast'
import { act } from 'react-dom/test-utils'

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
})
