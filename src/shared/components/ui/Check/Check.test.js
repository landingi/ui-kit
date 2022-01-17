import React from 'react'
import { mount } from 'enzyme'
import Check from '@components/ui/Check'
import registerIcons from '@helpers/icons'

registerIcons()

const checkComponent = <Check> Landingi </Check>

describe('<Check/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(checkComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `check` class', () => {
    expect(wrapper.find('span').hasClass('check')).toBe(true)
  })

  it('has not `check--positive` class', () => {
    expect(wrapper.find('span').hasClass('check--positive')).toBe(false)
  })

  it('has `check--positive` class', async done => {
    wrapper.setProps({
      positive: true
    })

    expect(wrapper.find('span').hasClass('check--positive')).toBe(true)

    done()
  })

  it('should have defined default prop positive', () => {
    expect(Check.defaultProps.positive).toBeDefined()
  })

  it('default prop `positive` should be false', () => {
    const result = Check.defaultProps.positive
    expect(result).toBe(false)
  })
})
