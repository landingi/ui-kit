import React from 'react'
import { mount } from 'enzyme'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'

const props = {
  children: <ListItem variant='inline'>children</ListItem>
}

const listComponent = <List {...props} />

describe('<List/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(listComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `list` class', () => {
    expect(wrapper.hasClass('list')).toBe(true)
  })

  it('<ListItem/> has `list__item` class', () => {
    expect(wrapper.find('li').hasClass('list__item')).toBe(true)
  })
})
