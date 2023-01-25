import { Section } from '@components/Section'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Section',
  component: Section
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = args => (
  <Section {...args}>children here</Section>
)

export const Default = Template.bind({})

Default.args = {}

export const WhiteBackground = Template.bind({})

WhiteBackground.args = {
  background: 'white'
}

export const HugeSpace = Template.bind({})

HugeSpace.args = {
  space: 'huge'
}
