import { Alert as AlertComponent } from '@components/Alert'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AlertComponent> = {
  component: AlertComponent
}

export default meta
type Story = StoryObj<typeof AlertComponent>

export const Info: Story = {
  render: () => <AlertComponent type='info'>info</AlertComponent>
}

export const Warning: Story = {
  render: () => <AlertComponent type='warning'>warning</AlertComponent>
}

export const Alert: Story = {
  render: () => <AlertComponent type='alert'>alert</AlertComponent>
}

export const Success: Story = {
  render: () => <AlertComponent type='success'>success</AlertComponent>
}
