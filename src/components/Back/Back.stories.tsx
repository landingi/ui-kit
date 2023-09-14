import { Back, BackProps } from '@components/Back'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Back',
  component: Back
} as Meta<typeof Back>

const Template: StoryFn<typeof Back> = (args: BackProps) => <Back {...args} />

export const Basic = Template.bind({})
export const WithTooltip = Template.bind({})
export const WithLabel = Template.bind({})

Basic.args = {
  content: '',
  label: ''
}

WithTooltip.args = {
  label: '',
  content: 'tooltip'
}

WithLabel.args = {
  label: 'Label',
  content: ''
}
