import React from 'react'
import { mount } from 'enzyme'
import Spinner from '@components/ui/Spinner'
import registerIcons from '@helpers/icons'

registerIcons()

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

  it('has `spinner__spin` class', () => {
    expect(wrapper.hasClass('spinner__spin')).toBe(true)
  })
})
