import React from 'react'
import StatsBadge from '@components/ui/StatsBadge'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'

const statsBadgeComponent = (
  <StatsBadge description='word.statistics' />
)

describe('<StatsBadge /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(statsBadgeComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has green color', () => {
    expect(wrapper.prop('color')).toBe('green')
    expect(
      wrapper
        .find('.container')
        .hasClass('container--green')
    ).toBe(true)
  })

  it('has yellow color', () => {
    wrapper.setProps({
      color: 'yellow'
    })

    expect(
      wrapper
        .find('.container')
        .hasClass('container--yellow')
    ).toBe(true)
  })

  it('has description box', () => {
    wrapper.setProps({
      variant: 'alert'
    })
    expect(
      wrapper
        .find('.container--description')
        .hasClass('container--description')
    ).toBe(true)
  })
})
