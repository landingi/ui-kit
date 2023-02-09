import { Item } from './Item'
import { Status } from './Status'

export const columns = [
  {
    header: 'Status',
    render: (data: Item) => (
      <Status {...data} jsCodeIdentifier={data.identifier} />
    ),
    identifier: 'enabled',
    width: 155
  },
  {
    header: 'Name',
    accessor: 'name' as const,
    identifier: 'name',
    width: 280
  },
  {
    header: 'Position',
    accessor: 'position' as const,
    identifier: 'position',
    width: 220
  },
  {
    header: 'Page',
    accessor: 'page' as const,
    identifier: 'page',
    width: 170
  }
]
