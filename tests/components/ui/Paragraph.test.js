import React from 'react'
import { mount } from 'enzyme'
import Paragraph from 'shared/components/ui/Paragraph'

const props = {
  children: 'placeholder'
}

const paragraphComponent = (<Paragraph {...props}>
    {props.children}
</Paragraph>)

describe('<Paragraph/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(paragraphComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `paragraph` class', () => {
    expect(wrapper.hasClass('paragraph')).toBe(true)
  })
})
