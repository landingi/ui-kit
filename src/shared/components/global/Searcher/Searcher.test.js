import React from 'react'
import Searcher from '@components/global/Searcher'
import { mountWithIntl } from '@jestutils'

const component = <Searcher />

describe('<Searcher/> mount', () => {
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
