import { Search } from '@components/Search'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Search',
  component: Search
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = args => (
  <div style={{ maxWidth: '400px' }}>
    <Search {...args} />
  </div>
)

export const Small = Template.bind({})

Small.args = {
  size: 'small'
}

export const Medium = Template.bind({})

Small.args = {
  size: 'medium'
}

export const Large = Template.bind({})

Small.args = {
  size: 'large'
}

export const WithLabelAndPlaceholder = Template.bind({})

WithLabelAndPlaceholder.args = {
  i18n: { label: 'Label test', placeholder: 'Placeholder test' }
}
