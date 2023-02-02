import { Separator } from '@components/Separator'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Separator',
  component: Separator
} as ComponentMeta<typeof Separator>

const Template: ComponentStory<typeof Separator> = args => (
  <Separator {...args} />
)

export const Default = Template.bind({})

Default.args = {
  children: 'Lorem ipsum'
}
