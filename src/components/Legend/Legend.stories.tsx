import { Legend } from '@components/Legend'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Legend',
  component: Legend
} as ComponentMeta<typeof Legend>

const Template: ComponentStory<typeof Legend> = args => <Legend {...args} />

export const Vertical = Template.bind({})
export const Horizontal = Template.bind({})

Vertical.args = {
  data: [
    { range: '0 - 19', variant: 'success' },
    { range: '20 - 59', variant: 'warning' },
    { range: '60 - 100', variant: 'alert' }
  ]
}

Horizontal.args = {
  data: [
    { range: '0 - 19', variant: 'success' },
    { range: '20 - 59', variant: 'warning' },
    { range: '60 - 100', variant: 'alert' }
  ],
  alignment: 'horizontal'
}
