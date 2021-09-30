import React from 'react'
import { mount } from 'enzyme'
import StepNumber from '@components/ui/StepNumber'

const props = {
  step: 1,
  variant: 'completed',
  size: 'medium',
  absolute: true
}

const stepNumberComponent = <StepNumber {...props} />

describe('<StepNumber /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(stepNumberComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('wrapper text expect "1"', () => {
    expect(wrapper.text()).toEqual('1')
  })

  it('Expect "step__number--complete" class', () => {
    expect(
      wrapper
        .find('span')
        .hasClass('step__number--completed')
    ).toBe(true)
  })

  it('Expect "step__number--medium" class', () => {
    expect(
      wrapper.find('span').hasClass('step__number--medium')
    ).toBe(true)
  })

  it('Expect "step__number--absolute" class', () => {
    expect(
      wrapper
        .find('span')
        .hasClass('step__number--absolute')
    ).toBe(true)
  })
})
