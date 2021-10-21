import React from 'react'
import ShowMore from '@components/ui/ShowMore'
import Button from '@components/ui/Button'
import { mountWithIntl } from '@jestutils'

const props = {
  content: 'word.smart-map',
  children: <Button>Test</Button>
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
