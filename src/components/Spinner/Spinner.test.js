import React from 'react'
import { mount } from 'enzyme'
import Spinner from '@components/Spinner'

const spinnerComponent = <Spinner />

describe('<Spinner/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(spinnerComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
