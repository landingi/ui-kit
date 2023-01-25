import { SectionTile } from '@components/SectionTile'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'SectionTile',
  component: SectionTile
} as ComponentMeta<typeof SectionTile>

const Template: ComponentStory<typeof SectionTile> = args => <SectionTile {...args}></SectionTile>

export const Inactive = Template.bind({})

Inactive.args = {
  thumbnailUrl: 'https://images.assets-landingi.com/images/section_placeholder.svg',
  isActive: false
}

export const Active = Template.bind({})

Active.args = {
  thumbnailUrl: 'https://images.assets-landingi.com/images/section_placeholder.svg',
  isActive: true
}



