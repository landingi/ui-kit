import React from 'react'
import LimitQuantity from '@components/ui/LimitQuantity'
import registerIcons from '@helpers/icons'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'

registerIcons()

const limitComponent = (<LimitQuantity
    limit={1000}
    quantity={100}
                        />)

describe('<LimitQuantity /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(limitComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('limit should be ` / 30 000`', () => {
    expect(wrapper.find('.limit-quantity--limit').text()).toEqual(' / 1 000')
  })

  it('limit should be infinity', () => {
    wrapper.setProps({
      limit: -1
    })
    expect(wrapper.find('.limit-quantity--limit').text()).toEqual(' / ∞')
  })

  it('quantity should be `100`', () => {
    expect(wrapper.find('.limit-quantity').text()).toEqual('100 / 1 000')
  })
})
