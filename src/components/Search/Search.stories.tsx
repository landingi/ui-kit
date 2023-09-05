import type { Meta, StoryObj } from '@storybook/react'

import { Search } from './Search'

const meta: Meta<typeof Search> = {
  component: Search
}

export default meta
type Story = StoryObj<typeof Search>

export const Small: Story = {
  render: () => (
    <Search
      size='small'
      i18n={{ label: 'Label test', placeholder: 'Placeholder test' }}
    />
  )
}

export const Medium: Story = {
  render: () => (
    <Search
      size='medium'
      i18n={{ label: 'Label test', placeholder: 'Placeholder test' }}
    />
  )
}

export const Large: Story = {
  render: () => (
    <Search
      size='large'
      i18n={{ label: 'Label test', placeholder: 'Placeholder test' }}
    />
  )
}

export const Disabled: Story = {
  render: () => (
    <Search
      size='large'
      isDisabled
      i18n={{ label: 'Label test', placeholder: 'Placeholder test' }}
    />
  )
}

export const WithoutLabelAndPlaceholder: Story = {
  render: () => <Search size='large' />
}
