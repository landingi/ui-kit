import React from 'react'
import { mount } from 'enzyme'
import ReactSelect from '@components/ui/Form/ReactSelect'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  id: 'jestem-id',
  children: 'jestem dziecko',
  name: 'field-name',
  value: 'mam-wartosc',
  field: {
    name: 'field-name'
  },
  form: {
    errors: {},
    touched: {}
  },
  options: [
    {
      value: 'field-name',
      label: 'test'
    }
  ]
}

const component = <ReactSelect {...props} />

describe('<ReactSelect /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(component)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
