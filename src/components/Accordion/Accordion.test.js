import React from 'react'
import { mount } from 'enzyme'
import Accordion from '@components/Accordion'

const accordionComponent = (
  <Accordion>
    <div label='label'>children</div>
  </Accordion>
)

describe('<Accordion/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(accordionComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
