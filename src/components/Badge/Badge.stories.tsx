/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge } from '@components/Badge'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Badge',
  component: Badge
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = args => (
  <div>
    <Badge {...args}>
      {' '}
      <a href='#'>I am just a link</a>{' '}
    </Badge>
    <br />
    <Badge {...args}>
      {' '}
      <a href='#'>I am text</a>{' '}
    </Badge>
  </div>
)

export const Pending = Template.bind({})
export const Warning = Template.bind({})
export const Alert = Template.bind({})
export const Success = Template.bind({})
export const Info = Template.bind({})

Pending.args = {
  type: 'pending'
}

Warning.args = {
  type: 'warning'
}

Alert.args = {
  type: 'alert'
}

Success.args = {
  type: 'success'
}

Info.args = {
  type: 'success'
}
