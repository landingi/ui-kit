import React from 'react'
import Search from '@components/ui/Search'
import registerIcons from '@helpers/icons'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'

registerIcons()

const props = {
  className: 'search',
  size: 'medium',
  autoFocus: false,
  onChange: () => null,
  children: null,
  variant: 'input',
  label: null
}

const searchComponent = <Search {...props} />

describe('<Search/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(searchComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
