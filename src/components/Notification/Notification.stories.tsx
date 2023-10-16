import { Notification, NotificationProps } from '@components/Notification'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Notification',
  component: Notification
} as Meta<typeof Notification>

const Template: StoryFn<typeof Notification> = (args: NotificationProps) => (
  <Notification {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  children: 'This is a notification',
  type: 'info',
  isClosable: false,
  hasTime: false
}
