import { Message } from '@components/Message'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import data from '../../mocks/landings'
import { UseTableProps } from '../../types'
import { useTable } from '../../useTable'
import { columns } from './columns'
import { FiltersAndSorters } from './FiltersAndSorters'
import { Item } from './Item'
import { Options } from './Options'
import { RowActions } from './RowActions'

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

export const LandingsDefault = Template.bind({})

LandingsDefault.args = {
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
  hasHeader: false,
  filtersAndSorters: () => <FiltersAndSorters />,
  options: () => <Options />,
  rowActions: () => <RowActions />
}

export const LandingsLoading = Template.bind({})

LandingsLoading.args = {
  name: 'landings',
  columns,
  data: [],
  isLoading: true,
  filtersAndSorters: () => <FiltersAndSorters />,
  options: () => <Options />,
  hasHeader: false,
  externalBorder: false
}

export const LandingsEmpty = Template.bind({})

LandingsEmpty.args = {
  name: 'landings',
  columns,
  data: [],
  filtersAndSorters: () => <FiltersAndSorters />,
  options: () => <Options />,
  hasHeader: false,
  emptyMessage: () => (
    <Message
      title='EMPTY'
      url='https://images.assets-landingi.com/images/empty-pages/landing_pages_empty.png'
      height={150}
    />
  )
}
