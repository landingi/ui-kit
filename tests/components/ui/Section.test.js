import React from 'react'
import { mount } from 'enzyme'
import Section from 'shared/components/ui/Section'

const props = {
  children: 'placeholder'
}

const sectionComponent = (<Section {...props}>
    {props.children}
</Section>)

describe('<Section/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(sectionComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `section` class', () => {
    expect(wrapper.hasClass('section')).toBe(true)
  })
})
