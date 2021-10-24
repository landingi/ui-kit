import React from 'react'

import ClientPagination from '@components/ui/ClientPagination'
import registerIcons from '@helpers/icons'
import { mountWithIntl } from '@jestutils'

registerIcons()

const props = {
  goToPage: () => null,
  activePageLimit: 10,
  pageLimit: () => null,
  pageIndex: 3,
  pageCount: 15
}

const clientPaginationComponent = <ClientPagination {...props} />

describe('<Client Pagination/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(clientPaginationComponent)
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

  it('has `first` and `last` buttons', () => {
    expect(
      wrapper.find('span.pagination__first').hasClass('pagination__first')
    ).toBe(true)
    expect(
      wrapper.find('span.pagination__last').hasClass('pagination__last')
    ).toBe(true)
  })
})
