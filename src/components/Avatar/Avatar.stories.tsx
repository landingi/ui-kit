import { Avatar, AvatarProps } from '@components/Avatar'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Avatar',
  component: Avatar
} as Meta<typeof Avatar>

const Template: StoryFn<typeof Avatar> = (args: AvatarProps) => (
  <Avatar {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  variant: 'blank',
  size: 'medium',
  name: 'Kamil',
  src: 'https://ca.slack-edge.com/T07M95VD2-U0BFVANVB-fd337e02e237-512'
}
