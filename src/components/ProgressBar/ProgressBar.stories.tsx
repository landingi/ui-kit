import { ProgressBar, ProgressBarProps } from '@components/ProgressBar'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'ProgressBar',
  component: ProgressBar
} as Meta<typeof ProgressBar>

const Template: StoryFn<typeof ProgressBar> = (args: ProgressBarProps) => (
  <ProgressBar {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  size: 'medium',
  variant: 'success',
  quantity: 50,
  limit: 100,
  showValue: true,
  valueSize: 16,
  withoutAnimation: false,
  border: 'white'
}
