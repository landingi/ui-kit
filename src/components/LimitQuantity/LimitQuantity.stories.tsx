import { LimitQuantity } from '@components/LimitQuantity'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'LimitQuantity',
  component: LimitQuantity
} as ComponentMeta<typeof LimitQuantity>

const Template: ComponentStory<typeof LimitQuantity> = args => (
  <LimitQuantity {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  limit: 20000,
  quantity: 10000
}

export const Unlimited = Template.bind({})

Unlimited.args = {
  limit: -1,
  quantity: 10000
}
