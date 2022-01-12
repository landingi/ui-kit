import React from 'react'
import { mountWithIntl } from '@jestutils'
import BlockSection from '@components/ui/BlockSection'

const onClickMock = jest.fn()
const props = {
  title: 'empty.list.message.domains.section1.title',
  message: 'empty.list.message.domains.section1.message',
  button: 'empty.list.message.domains.section.button',
  url: '/assets/img/empty/domains/domain_empty_section1.png',
  onClick: onClickMock,
  reverse: false
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

  it('has not `block-section__panel--reverse` class when reverse is set to false', () => {
    expect(
      wrapper.find('div').at(2).hasClass('block-section__panel--reverse')
    ).toBe(false)
  })

  it('has `block-section__panel--reverse` class on reverse true', () => {
    wrapper.setProps({
      reverse: true
    })

    wrapper.update()

    expect(
      wrapper.find('div').at(2).hasClass('block-section__panel--reverse')
    ).toBe(true)
  })

  it('expect "Publish it your way"', () => {
    expect(wrapper.find('span').text()).toEqual(
      'empty.list.message.domains.section1.title'
    )
  })

  it('should have defined default prop onClick', () => {
    expect(wrapper.props().onClick).toBeDefined()
  })

  it('should have defined default prop className with value set to block-section', () => {
    expect(wrapper.props().className).toEqual('block-section')
  })

  it('should have defined default prop list with value set to null', () => {
    expect(wrapper.props().list).toEqual(null)
  })

  it('should have defined default prop reverse with value set to false', () => {
    expect(wrapper.props().reverse).toEqual(false)
  })

  it('should have defined default prop reverse with value set to false', () => {
    expect(wrapper.props().reverse).toEqual(false)
  })

  it('onClick callback have not been called', () => {
    expect(wrapper.props().onClick).toHaveBeenCalledTimes(0)
  })

  it('onClick callback have been called once', () => {
    wrapper.find('Button').simulate('click')

    expect(wrapper.props().onClick).toHaveBeenCalledTimes(1)
  })
})
