import React from 'react'
import { mountWithIntl } from '@jestutils'
import LimitSmall from '@components/ui/LimitSmall'

const limitSmallComponent = (
  <LimitSmall
    limit={20000}
    limitText="word.unique.visitors"
    padding="none"
    quantity={5}
  />
)

describe('<Limit /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(limitSmallComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has none padding', () => {
    expect(
      wrapper
        .find('.result__dropdown')
        .hasClass('padding__none')
    ).toBe(true)
  })

  it('quantity should be `Unique visitors5 / 20 000`', () => {
    expect(
      wrapper.find('.result__dropdown').text()
    ).toEqual('Unique visitors5 / 20 000')
  })
})
