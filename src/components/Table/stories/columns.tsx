import { Item } from './Item'
import { LandingInfo } from './LandingInfo'

export const columns = [
  {
    header: 'info',
    identifier: 'info',
    render: (info: Item) => <LandingInfo {...info} />,
    width: '100%' as const
  }
]
