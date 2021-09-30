import React from 'react'
import Headline from '@components/global/Headline'
import { mountWithIntl } from '@jestutils'

const component = <Headline />

describe('<Headline/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(component)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
