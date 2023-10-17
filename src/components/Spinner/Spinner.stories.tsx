import { Spinner, SpinnerProps } from '@components/Spinner'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Spinner',
  component: Spinner
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = (args: SpinnerProps) => (
  <Spinner {...args} />
)

export const Basic = Template.bind({})
