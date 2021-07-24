import React from 'react'
import { mount } from 'enzyme'
import Image from 'shared/components/ui/Image'

const props = {
  src: 'http://www.laningi.com',
  alt: 'Landing Page Builder for non-programmers',
  size: 100
}

const imageComponent = <Image {...props} />

describe('<Image/> mount', () => {
  const wrapper = mount(imageComponent)

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
