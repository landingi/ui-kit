import { Back } from '@components/Back'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Back',
  component: Back
} as ComponentMeta<typeof Back>

const Template: ComponentStory<typeof Back> = args => <Back {...args} />

export const Basic = Template.bind({})
export const WithTooltip = Template.bind({})
export const WithLabel = Template.bind({})

Basic.args = {}

WithTooltip.args = {
  content: 'tooltip'
}

WithLabel.args = {
  label: 'Label'
}
