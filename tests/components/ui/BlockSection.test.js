import React from 'react'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'
import BlockSection from '@components/ui/BlockSection'

const props = {
  title: 'empty.list.message.domains.section1.title',
  message: 'empty.list.message.domains.section1.message',
  button: 'empty.list.message.domains.section.button',
  url: '/assets/img/empty/domains/domain_empty_section1.png',
  onClick: () => null,
  reverse: true
}

const blockSectionComponent = <BlockSection {...props} />

describe('<BlockSection /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(blockSectionComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `block-section` class', () => {
    expect(wrapper.hasClass('block-section')).toBe(true)
  })

  it('has `block-section__panel--reverse` class', () => {
    expect(
      wrapper
        .find('div')
        .at(2)
        .hasClass('block-section__panel--reverse')
    ).toBe(true)
  })

  it('expect "Publish it your way"', () => {
    expect(wrapper.find('span').text()).toEqual(
      'Publish it your way'
    )
  })

  it('simulate <Button /> click', () => {
    const mockCallBack = jest.fn()
    wrapper.find('Button').simulate('click')

    expect(mockCallBack.mock.calls.length).toEqual(0)
  })
})
