import React from 'react'
import ScrollSpy from '@components/global/ScrollSpy'
import { mount } from 'enzyme'

const mockedOnClick = jest.fn()

const data = [
  {
    children: [
      {
        title: 'Children title',
        url: 'http://landingi.com'
      }
    ],
    icon: 'search',
    title: 'Parent title'
  }
]
const component = <ScrollSpy elements={data} onClick={mockedOnClick} />

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

  it('should have defined default prop onClick', () => {
    expect(wrapper.props().onClick).toBeDefined()
  })
})
