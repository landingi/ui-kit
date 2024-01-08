import { Button } from '@components/Button'
import { StatsBadge, StatsBadgeProps } from '@components/StatsBadge'
import { Meta, StoryFn } from '@storybook/react'
import { Fragment } from 'react'

export default {
  title: 'StatsBadge',
  component: StatsBadge
} as Meta<typeof StatsBadge>

const Template: StoryFn<typeof StatsBadge> = (args: StatsBadgeProps) => (
  <StatsBadge {...args} />
)

export const Green = Template.bind({})
export const Yellow = Template.bind({})
export const Pink = Template.bind({})

Green.args = {
  color: 'green',
  quantity: 5,
  description: 'green stat'
}

Yellow.args = {
  color: 'yellow',
  quantity: 50,
  description: 'yellow stat'
}

Pink.args = {
  color: 'pink',
  quantity: 10,
  description: 'pink stat'
}
