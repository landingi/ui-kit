import React from 'react'
import Fresh from 'shared/components/global/Fresh'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'

const props = {
  name: 'word.extend.limit',
  mail: 'mailto:success@landingi.com',
  subject: 'extend.your.limit.subject',
  description: 'extend.your.limit.description',
  variant: 'secondary'
}

const freshComponent = <Fresh {...props} />

describe('<Fresh/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(freshComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('button name should be "Extend your limit"', () => {
    expect(wrapper.find('Button').text()).toEqual(
      'Extend your limit'
    )
  })

  it('mail  should be "mailto:success@landingi.com"', () => {
    expect(wrapper.props().mail).toEqual(
      'mailto:success@landingi.com'
    )
  })

  it('subject name should be "extend.your.limit.subject"', () => {
    expect(wrapper.props().subject).toEqual(
      'extend.your.limit.subject'
    )
  })

  it('description name should be "extend.your.limit.description"', () => {
    expect(wrapper.props().description).toEqual(
      'extend.your.limit.description'
    )
  })
})
