import { Select } from '@components/Select'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Select',
  component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'country',
  data: [
    { label: 'Polska', value: 'PL' },
    { label: 'Niemcy', value: 'DE' },
    { label: 'Francja', value: 'FR' }
  ]
}
