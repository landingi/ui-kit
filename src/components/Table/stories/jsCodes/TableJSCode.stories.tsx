import { ComponentMeta, ComponentStory } from '@storybook/react'

import data from '../../mocks/jsCodes'
import { UseTableProps } from '../../types'
import { useTable } from '../../useTable'
import { columns } from './columns'
import { Item } from './Item'

const Component = (props: UseTableProps<Item>) => {
  const { Table } = useTable<Item>(props)

  return <Table />
}

export default {
  title: 'Table',
  component: Component
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => {
  const { Table } = useTable<Item>(args)

  return (
    <div style={{ maxWidth: '1000px' }}>
      <Table />
    </div>
  )
}

export const JsCodesDefault = Template.bind({})

JsCodesDefault.args = {
  name: 'landings',
  columns,
  data: data.collection,
  pagination: {
    total: data.pagination.counter.total,
    current: 1
  },
  i18n: {
    selected: 'selected',
    first: 'first',
    last: 'last'
  },
  options: () => <div>Options</div>
}
