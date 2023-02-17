import { Avatar } from '@components/Avatar'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Basic = Template.bind({})
export const Image = Template.bind({})
export const Tiny = Template.bind({})

Basic.args = {
  variant: 'blank',
  size: 'medium',
  name: 'Kamil'
}

Image.args = {
  variant: 'image',
  size: 'medium',
  src: 'https://ca.slack-edge.com/T07M95VD2-U0BFVANVB-fd337e02e237-512'
}

Tiny.args = {
  variant: 'blank',
  size: 'tiny',
  name: 'Kamil'
}
