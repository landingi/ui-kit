import React from 'react'
import moxios from 'moxios'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'
import registerIcons from '@helpers/icons'
import Table from '@components/ui/Table'
import { BrowserRouter as Router } from 'react-router-dom'
import { makeStore } from '../../helpers/utils'
import columns from '../../fixtures/table/columns'
import filters from '../../fixtures/table/filters'
import landingsFixture from '../../fixtures/groups/landingsFixture'

registerIcons()

const fetchData = jest.fn()
const handleIsRead = jest.fn()
const handleDelete = jest.fn()
const handleDetails = jest.fn()
const handleSelect = jest.fn()

const props = {
  isSupportMode: false,
  columns: columns,
  data: landingsFixture.data,
  fetchData: fetchData,
  totalRows: landingsFixture.meta.total,
  isLoading: false,
  readRow: handleIsRead,
  deleteRow: handleDelete,
  detailsRow: handleDetails,
  tableName: 'testingTable',
  userPermissions: [],
  handleSelect: handleSelect,
  customFilters: filters,
  hasSelect: true
}

const component = <Table {...props} />

describe('<Table /> mount', () => {
  let wrapper

  beforeEach(() => {
    moxios.install()
    wrapper = mountWithIntl(makeStore(<Router>
        {component}
                                      </Router>))
  })

  afterEach(() => {
    wrapper.unmount()
    moxios.uninstall()
    jest.clearAllMocks()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has filter', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
