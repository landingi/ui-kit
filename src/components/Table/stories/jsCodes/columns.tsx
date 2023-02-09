import { Item } from './Item'
import { Status } from './Status'

export const columns = [
  {
    header: 'Status',
    render: (data: Item) => (
      <Status {...data} jsCodeIdentifier={data.identifier} />
    ),
    identifier: 'enabled',
    width: '155px' as const
  },
  {
    header: 'Name',
    accessor: 'name' as const,
    identifier: 'name',
    width: '280px' as const
  },
  {
    header: 'Position',
    accessor: 'position' as const,
    identifier: 'position',
    width: '220px' as const
  },
  {
    header: 'Page',
    accessor: 'page' as const,
    identifier: 'page',
    width: '170px' as const
  }
]
