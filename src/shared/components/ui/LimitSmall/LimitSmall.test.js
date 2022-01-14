import React from 'react'
import { mountWithIntl } from '@jestutils'
import LimitSmall from '@components/ui/LimitSmall'

describe('<LimitSmall /> mount', () => {
  let wrapper

  const props = {
    limit: 20000,
    limitText: 'word.unique.visitors',
    padding: 'none',
    quantity: 5
  }

  beforeEach(() => {
    wrapper = mountWithIntl(<LimitSmall {...props} />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has none padding', () => {
    expect(
      wrapper.find('.result__dropdown .padding__none').hasClass('padding__none')
    ).toBe(true)
  })

  it('quantity should be `word.unique.visitors 5 / 20 000`', () => {
    expect(wrapper.find('.result__dropdown').at(1).text()).toEqual(
      'word.unique.visitors5 / 20 000'
    )
  })
})

describe('<LimitSmall /> mount', () => {
  let wrapper

  const props = {
    limit: 20000,
    limitText: 'word.unique.visitors',
    padding: 'small',
    quantity: 5
  }

  beforeEach(() => {
    wrapper = mountWithIntl(<LimitSmall {...props} />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has small padding', () => {
    expect(
      wrapper
        .find('.result__dropdown .padding__small')
        .hasClass('padding__small')
    ).toBe(true)
  })
})

describe('<LimitSmall /> mount', () => {
  let wrapper

  const props = {
    limit: 20000,
    limitText: 'word.unique.visitors',
    padding: 'medium',
    quantity: 5
  }

  beforeEach(() => {
    wrapper = mountWithIntl(<LimitSmall {...props} />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has medium padding', () => {
    expect(
      wrapper
        .find('.result__dropdown .padding__medium')
        .hasClass('padding__medium')
    ).toBe(true)
  })
})
