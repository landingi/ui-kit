import React from 'react'
import SectionTile from '@components/ui/SectionTile'
import { mountWithIntl } from '@jestutils'

const component = <SectionTile />

describe('<SectionTile/> mount', () => {
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

  it('default prop `onDoubleClick` should be null', () => {
    const result = SectionTile.defaultProps.onDoubleClick()

    expect(result).toBe(null)
  })

  it('default prop `onClick` should be null', () => {
    const result = SectionTile.defaultProps.onClick()

    expect(result).toBe(null)
  })

  it('default prop `thumbnailUrl` should empty string', () => {
    const result = SectionTile.defaultProps.thumbnailUrl

    expect(result).toBe('')
  })

  it('default prop `isActive` should be false', () => {
    const result = SectionTile.defaultProps.isActive

    expect(result).toBe(false)
  })

  it('has class name section-tile', () => {
    expect(wrapper.find('div.section-tile').exists()).toBe(true)
    expect(
      wrapper.find('div.section-tile').hasClass('section-tile--active')
    ).toBe(false)
  })

  it('should have `section-tile--active` when isActive', () => {
    wrapper.setProps({
      isActive: true
    })

    expect(
      wrapper.find('div.section-tile').hasClass('section-tile--active')
    ).toBe(true)
  })
})
