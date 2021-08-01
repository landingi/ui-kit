import React from 'react'
import { mount } from 'enzyme'
import Card from '@components/ui/Card'
import Paragraph from '@components/ui/Paragraph'

const props = {
  children: <Paragraph>
      children
  </Paragraph>
}

const cardComponent = (<Card
    {...props}
    variant="success"
    />)

describe('<Card /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(cardComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `card` class', () => {
    expect(wrapper.find('div.card').hasClass('card')).toBe(true)
  })

  it('has `success` class', () => {
    expect(wrapper.find('div.card--success').hasClass('card--success')).toBe(
      true
    )
  })
})
