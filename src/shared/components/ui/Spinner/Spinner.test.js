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

  it('default prop `classname` should be spinner', () => {
    const result = Spinner.defaultProps.className

    expect(result).toBe('spinner')
  })
})
