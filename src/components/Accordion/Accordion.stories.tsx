import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  component: Accordion
}

export default meta

type Story = StoryObj<typeof Accordion>

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

export const NoPadding: Story = {
  render: () => <Accordion data={data} padding='none' />
}

export const PaddingSmall: Story = {
  render: () => <Accordion data={data} padding='small' />
}

export const PaddingMedium: Story = {
  render: () => <Accordion data={data} padding='medium' />
}

export const WithDescription: Story = {
  render: () => (
    <Accordion
      data={[
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
      ]}
      padding='medium'
    />
  )
}

export const IsBox: Story = {
  render: () => <Accordion data={data} isBox />
}
