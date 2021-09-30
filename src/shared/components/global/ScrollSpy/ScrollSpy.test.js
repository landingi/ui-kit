import React from 'react'
import ScrollSpy from '@components/global/ScrollSpy'
import { mount } from 'enzyme'

const data = [{
  children: [
    {
      title: 'Children title',
      url: 'http://landingi.com'
    }
  ],
  icon: 'bullhorn',
  title: 'Parent title'
}]
const component = <ScrollSpy elements={data} />

describe('<ScrollSpy/> mount', () => {
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
})
