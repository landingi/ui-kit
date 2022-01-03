import React from 'react'
import { mount } from 'enzyme'
import InfinityScroll from '@components/ui/InfinityScroll'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  children: 'Infinity Scroll'
}

const infinityScrollComponent = <InfinityScroll {...props} />

global.IntersectionObserver = class IntersectionObserver {
  constructor(func) {
    this.func = func
  }

  observe(element) {
    this.func([{ isIntersecting: true, target: element }])
  }

  disconnect() {
    return null
  }

  unobserve() {
    return null
  }
}

describe('<InfinityScroll/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(infinityScrollComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has no loader on end', () => {
    wrapper.setProps({
      isLastPage: true
    })

    expect(
      wrapper.find('.container').find('.loading').hasClass('loading-hide')
    ).toBe(true)
  })
})
