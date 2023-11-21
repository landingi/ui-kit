/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge, BadgeProps } from '@components/Badge'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Badge',
  component: Badge
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = (args: BadgeProps) => (
  <div>
    <Badge {...args}>
      <a href='#'>I am just a link</a>
    </Badge>
    <br />
    <Badge {...args}>Text</Badge>
  </div>
)

export const Basic = Template.bind({})
export const WithTooltip = Template.bind({})
export const TextUppercaseNone = Template.bind({})

Basic.args = {
  type: 'warning',
  isIndicator: false
}

WithTooltip.args = {
  type: 'ai',
  isIndicator: false,
  tooltip: 'I am a tooltip'
}

TextUppercaseNone.args = {
  type: 'success',
  isTextUppercase: false
}
