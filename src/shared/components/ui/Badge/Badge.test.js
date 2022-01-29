import React from 'react'
import { mount } from 'enzyme'
import Badge from '@components/ui/Badge'

const props = {
  children: 'Badge'
}

const badgeComponent = <Badge {...props} />

describe('<Badge/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(badgeComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('is alert', () => {
    wrapper.setProps({
      type: 'alert'
    })
    expect(wrapper.find('span.badge--alert').hasClass('badge--alert')).toBe(
      true
    )
  })

  it('is info', () => {
    wrapper.setProps({
      type: 'info'
    })
    expect(wrapper.find('span.badge--info').hasClass('badge--info')).toBe(true)
  })

  it('is success', () => {
    wrapper.setProps({
      type: 'success'
    })
    expect(wrapper.find('span.badge--success').hasClass('badge--success')).toBe(
      true
    )
  })

  it('is pending', () => {
    wrapper.setProps({
      type: 'pending'
    })
    expect(wrapper.find('span.badge--pending').hasClass('badge--pending')).toBe(
      true
    )
  })

  it('is warning', () => {
    wrapper.setProps({
      type: 'warning'
    })
    expect(wrapper.find('span.badge--warning').hasClass('badge--warning')).toBe(
      true
    )
  })

  it('is accent-1', () => {
    wrapper.setProps({
      type: 'accent-1'
    })
    expect(
      wrapper.find('span.badge--accent-1').hasClass('badge--accent-1')
    ).toBe(true)
  })

  it('is accent-2', () => {
    wrapper.setProps({
      type: 'accent-2'
    })
    expect(
      wrapper.find('span.badge--accent-2').hasClass('badge--accent-2')
    ).toBe(true)
  })

  it('when is indicator should have class badge--indicator', () => {
    wrapper.setProps({
      isIndicator: true
    })

    expect(wrapper.find('span.badge').hasClass('badge--indicator')).toBe(true)
  })

  it('when the tooltip prop has not value the children span should not have badge-tooltip class', () => {
    expect(wrapper.find('span').at(2).hasClass('badge-tooltip')).toBe(false)
  })

  it('when the tooltip prop has value the children span should have badge-tooltip class', () => {
    wrapper.setProps({
      tooltip: 'tooltip'
    })

    expect(wrapper.find('span').at(2).hasClass('badge-tooltip')).toBe(true)
  })

  it('Tooltip is disabled when prop content is empty', () => {
    wrapper.setProps({
      content: null
    })

    expect(wrapper.find('Badge').prop('content')).toBe(null)
    expect(wrapper.find('Tooltip').prop('disabled')).toBe(true)
  })

  it('Tooltip is disabled when width < 105', () => {
    wrapper.setProps({
      width: 104
    })

    expect(wrapper.find('Badge').prop('content')).toBe(undefined)
    expect(wrapper.find('Tooltip').prop('disabled')).toBe(true)
  })

  it('Tooltip is visible', () => {
    wrapper.setProps({
      content: 'some content'
    })

    expect(wrapper.find('Badge').prop('content')).toBe('some content')
  })
})
