import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Accordion } from './Accordion'

export default {
  title: 'Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args} />
)

const data = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    content:
      'Integer et neque efficitur, lobortis nulla eget, porttitor augue. Integer eget tortor sed libero tincidunt semper vitae id mi.'
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    content:
      'Integer et neque efficitur, lobortis nulla eget, porttitor augue. Integer eget tortor sed libero tincidunt semper vitae id mi.'
  }
]

export const NoPadding = Template.bind({})

NoPadding.args = {
  data,
  padding: 'none'
}

/* export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
} */
