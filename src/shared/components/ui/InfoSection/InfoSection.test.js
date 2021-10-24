import React from 'react'
import InfoSection from '@components/ui/InfoSection'
import { mountWithIntl } from '@jestutils'

const props = {
  title: 'empty.list.message.domains.title',
  url: '/assets/img/empty/domains/domain_empty.png',
  button: 'empty.list.message.domains.button',
  list: [
    'empty.list.message.domains.item1',
    'empty.list.message.domains.item2',
    'empty.list.message.domains.item3'
  ],
  onClick: () => null
}

const infoSectionComponent = <InfoSection {...props} />

describe('<InfoSection /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(infoSectionComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `info-section` class', () => {
    expect(wrapper.find('div').first().hasClass('info-section')).toBe(true)
  })

  it('expect "Let your landing page go live!"', () => {
    expect(wrapper.find('span').text()).toEqual(
      'empty.list.message.domains.title'
    )
  })

  it('expect "Add a domain in a few easy steps"', () => {
    expect(wrapper.find('div').at(2).text()).toEqual(
      'empty.list.message.domains.item1'
    )
  })

  it('expect "Get a free SSL certificate"', () => {
    expect(wrapper.find('div').at(3).text()).toEqual(
      'empty.list.message.domains.item2'
    )
  })

  it('expect "Take advantage of multiple publishing options"', () => {
    expect(wrapper.find('div').at(4).text()).toEqual(
      'empty.list.message.domains.item3'
    )
  })

  it('simulate <Button /> click', () => {
    const mockCallBack = jest.fn()
    wrapper.find('Button').simulate('click')

    expect(mockCallBack.mock.calls.length).toEqual(0)
  })
})
