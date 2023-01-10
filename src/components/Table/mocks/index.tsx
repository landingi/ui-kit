import { Column } from '@components/Table/types'

export type Item = {
  identifier: string
  name: string
  url: string
}

export const mockData: Item[] = [
  {
    identifier: 'b9e739e2-b31d-4cd3-b1ff-a82b7b91d86b',
    name: 'test-page',
    url: 'https://test-page.com'
  },
  {
    identifier: 'ab904c1b-3077-43ce-958f-2ade367d787e',
    name: 'test-page-2',
    url: 'https://test-page-2.com'
  }
]

export const mockDataWithPagination: Item[] = [
  ...mockData,
  {
    identifier: 'f9c6dba4-b048-4c8b-a32b-c2b71c44d592',
    name: 'test-page-3',
    url: 'https://test-page-3.com'
  },
  {
    identifier: '7beb3962-3cc6-49b3-8fcb-2f868ec717c1',
    name: 'test-page-4',
    url: 'https://test-page-4.com'
  },
  {
    identifier: '8a813890-e65f-4399-b4b6-99e6130ef6e3',
    name: 'test-page-5',
    url: 'https://test-page-5.com'
  },
  {
    identifier: '7aa78f81-dc67-4378-92b8-80d22e00e2f9',
    name: 'test-page-6',
    url: 'https://test-page-6.com'
  },
  {
    identifier: 'd3e69485-3ac3-480b-bf64-8d55c901a38b',
    name: 'test-page-7',
    url: 'https://test-page-7.com'
  },
  {
    identifier: 'fed2041a-f374-4055-9c14-f4f270ba9501',
    name: 'test-page-8',
    url: 'https://test-page-8.com'
  },
  {
    identifier: 'ea2ea90c-a06d-47cb-9e78-efb80c5ba3ca',
    name: 'test-page-9',
    url: 'https://test-page-9.com'
  },
  {
    identifier: '1d48eb60-6df2-4ced-b7b1-b573c674040e',
    name: 'test-page-10',
    url: 'https://test-page-10.com'
  },
  {
    identifier: '97da75fe-7355-4404-8a31-196b2702978d',
    name: 'test-page-11',
    url: 'https://test-page-11.com'
  },
  {
    identifier: 'ec940f0e-a3e9-4a2d-b1e8-c174b49d452f',
    name: 'test-page-12',
    url: 'https://test-page-12.com'
  }
]

export const columns: Column<Item>[] = [
  {
    identifier: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    identifier: 'custom-column',
    header: 'Custom Column',
    render: item => (
      <div className='test-class'>custom-column-content-{item.name}</div>
    )
  }
]

export const i18n = {
  selected: 'selected',
  first: 'first',
  last: 'last'
}
