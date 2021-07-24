import React from 'react'
import { mount } from 'enzyme'
import {
  SkeletonCircle,
  SkeletonLine,
  SkeletonSidebar,
  SkeletonDrawer
} from 'shared/components/ui/Skeleton'

const skeletonCircleComponent = <SkeletonCircle />
const skeletonLineComponent = <SkeletonLine />
const skeletonSidebarComponent = <SkeletonSidebar />
const skeletonDrawerComponent = <SkeletonDrawer />

describe('<SkeletonCircle/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(skeletonCircleComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})

describe('<SkeletonLine/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(skeletonLineComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})

describe('<SkeletonSidebar/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(skeletonSidebarComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})

describe('<SkeletonDrawer /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(skeletonDrawerComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
