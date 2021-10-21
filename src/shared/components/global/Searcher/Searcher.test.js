import React from 'react'
import Searcher from '@components/global/Searcher'
import { mountWithIntl } from '@jestutils'
import registerIcons from '@helpers/icons'

registerIcons()

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
