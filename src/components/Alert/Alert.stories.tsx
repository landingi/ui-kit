import { Alert } from '@components/Alert'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Alert',
  component: Alert
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = args => (
  <Alert {...args}> Lorem ipsum dolor sit amet </Alert>
)

export const Info = Template.bind({})
export const Warning = Template.bind({})
export const AlertT = Template.bind({})
export const Success = Template.bind({})

Info.args = {
  type: 'info'
}

Warning.args = {
  type: 'warning'
}

AlertT.args = {
  type: 'alert'
}

Success.args = {
  type: 'success'
}
