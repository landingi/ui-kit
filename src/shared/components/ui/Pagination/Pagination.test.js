import React from 'react'
import Pagination from '@components/ui/Pagination'
import registerIcons from '@helpers/icons'
import { mountWithIntl } from '@jestutils'

registerIcons()

const props = {
  goToPage: () => null,
  activePageLimit: 10,
  pageLimit: () => null,
  pageIndex: 3,
  pageCount: 15,
  data: {
    after_values: {
      next: 4
    },
    before_values: {
      first: 1,
      prev: 2
    },
    values: {
      after: [4,5,6],
      before: [1,2],
      current: [3]
    }
  }
}

const component = <Pagination {...props} />

describe('<Pagination /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(component)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `pagination` class', () => {
    expect(wrapper.hasClass('pagination')).toBe(true)
  })
})
