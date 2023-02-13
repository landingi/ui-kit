import { Item } from '../stories/jsCodes/Item'

const data: {
  collection: Item[]
  pagination: { counter: { current: number; total: number } }
} = {
  collection: [
    {
      identifier: 1513521,
      enabled: false,
      name: 'JS',
      position: 'body_bottom',
      page: 'main'
    },
    {
      identifier: 1513522,
      enabled: false,
      name: 'car calculator 1',
      position: 'body_bottom',
      page: 'main'
    },
    {
      identifier: 1513523,
      enabled: true,
      name: 'FAQ',
      position: 'body_bottom',
      page: 'main'
    },
    {
      identifier: 1513524,
      enabled: true,
      name: 'RRSO slide',
      position: 'body_bottom',
      page: 'main'
    },
    {
      identifier: 1513525,
      enabled: true,
      name: 'Calc 1',
      position: 'body_bottom',
      page: 'main'
    }
  ],
  pagination: { counter: { current: 5, total: 5 } }
}

export default data
