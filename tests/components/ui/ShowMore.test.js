import React from 'react'
import ShowMore from 'shared/components/ui/ShowMore'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'

const props = {
  content: 'word.smart-map'
}

const showMoreComponent = <ShowMore {...props} />

describe('<ShowMore/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(showMoreComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
