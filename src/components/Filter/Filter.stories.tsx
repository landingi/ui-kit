import { Filter } from '@components/Filter'
import { Spacer } from '@components/Spacer'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Column, Row } from 'simple-flexbox'

export default {
  title: 'Filter',
  component: Filter
} as ComponentMeta<typeof Filter>

const Template: ComponentStory<typeof Filter> = args => (
  <Column>
    <Row>Filter in 200px wide Row, adjusts its width to parent</Row>

    <Spacer space='small' />

    <Row style={{ width: '200px' }}>
      <Filter {...args} />
    </Row>
  </Column>
)

export const Default = Template.bind({})

Default.args = {
  values: [
    {
      label: 'Ascending',
      value: 'ASC'
    },
    {
      label: 'Descending',
      value: 'DESC'
    }
  ],
  initialValue: 'DESC'
}
