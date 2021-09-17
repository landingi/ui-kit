import React from 'react'
import Steps from '@components/ui/Steps'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'

const props = {
  data: [
    {
      variant: 'completed',
      description: 'modal.domains.steps.add.domain'
    },
    {
      variant: 'current',
      description: 'modal.domains.steps.verify.provider'
    },
    {
      variant: 'next',
      description: 'modal.domains.steps.setup.domain'
    }
  ]
}

const stepsComponent = <Steps {...props} />

describe('<Steps /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(stepsComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has one completed variant', () => {
    expect(
      wrapper
        .find('span.step__number--completed')
        .hasClass('step__number--completed')
    ).toBe(true)
    expect(
      wrapper
        .find('span.step__description--completed')
        .hasClass('step__description--completed')
    ).toBe(true)
  })

  it('has one current variant', () => {
    expect(
      wrapper
        .find('span.step__number--current')
        .hasClass('step__number--current')
    ).toBe(true)
    expect(
      wrapper
        .find('span.step__description--current')
        .hasClass('step__description--current')
    ).toBe(true)
  })

  it('has one next variant', () => {
    expect(
      wrapper
        .find('span.step__number--next')
        .hasClass('step__number--next')
    ).toBe(true)
    expect(
      wrapper
        .find('span.step__description--next')
        .hasClass('step__description--next')
    ).toBe(true)
  })
})
