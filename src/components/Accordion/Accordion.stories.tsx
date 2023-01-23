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

export const PaddingSmall = Template.bind({})

PaddingSmall.args = {
  data,
  padding: 'small'
}

export const PaddingMedium = Template.bind({})

PaddingMedium.args = {
  data,
  padding: 'medium'
}

export const WithDescription = Template.bind({})

WithDescription.args = {
  data: [
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Nulla condimentum arcu id consectetur vestibulum.',
      content:
        'Integer et neque efficitur, lobortis nulla eget, porttitor augue. Integer eget tortor sed libero tincidunt semper vitae id mi.'
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Nulla condimentum arcu id consectetur vestibulum.',
      content:
        'Integer et neque efficitur, lobortis nulla eget, porttitor augue. Integer eget tortor sed libero tincidunt semper vitae id mi.'
    }
  ]
}

export const IsBox = Template.bind({})

IsBox.args = {
  data,
  isBox: true
}
