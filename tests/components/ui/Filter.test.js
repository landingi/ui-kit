import React from 'react'
import { mount } from 'enzyme'
import Filter from '@components/ui/Filter'
import Button from '@components/ui/Button'
import Dropdown from '@components/ui/Dropdown'
import registerIcons from '@helpers/icons'
import ListItem from '@components/ui/List/Item'

registerIcons()

const props = {
  values: [
    {
      value: 'name',
      label: 'Nazwa'
    },
    {
      value: 'date',
      label: 'Data'
    }
  ],
  initialValue: 'name'
}

const FilterComponent = <Filter {...props} />

describe('<Filter/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FilterComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `Nazwa` label', () => {
    expect(wrapper.find(Dropdown).props().label).toEqual(
      'Nazwa'
    )
  })

  it('has two filters to choose', () => {
    wrapper
      .find(Dropdown)
      .find('span')
      .first()
      .simulate('click')
    wrapper.update()
    expect(
      wrapper.find(Dropdown).find(ListItem).length
    ).toEqual(2)
  })

  it('set filter after click', () => {
    wrapper
      .find(Dropdown)
      .find('span')
      .first()
      .simulate('click')
    wrapper.update()
    wrapper
      .find(Dropdown)
      .find(ListItem)
      .last()
      .find(Button)
      .simulate('click')
    wrapper.update()
    expect(wrapper.find(Dropdown).props().label).toEqual(
      'Data'
    )
  })
})
