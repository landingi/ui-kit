import React from 'react'
import Message from '@components/ui/Message'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'

const props = {
  children: 'placeholder',
  title: 'domainsnew.page.title',
  message: 'domainsnew.page.title',
  asset: ''
}

const MessageComponent = <Message {...props} />

describe('<Message/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(MessageComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `message` class', () => {
    expect(wrapper.find('div').first().hasClass('message')).toBe(true)
  })
})
