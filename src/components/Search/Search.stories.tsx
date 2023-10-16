import { Search, SearchProps } from '@components/Search'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Search',
  component: Search
} as Meta<typeof Search>

const Template: StoryFn<typeof Search> = (args: SearchProps) => (
  <Search {...args} />
)

export const Input = Template.bind({})

export const IsDisabled = Template.bind({})

export const DefaultValue = Template.bind({})

export const OtherIcon = Template.bind({})

export const WithoutIcon = Template.bind({})

Input.args = {
  variant: 'input',
  i18n: {
    placeholder: 'Placeholder',
    label: 'Label'
  }
}

IsDisabled.args = { variant: 'input', isDisabled: true }

DefaultValue.args = { variant: 'input', defaultValue: 'some default value' }

OtherIcon.args = {
  variant: 'input',
  searchIcon: 'icon-arrow-left'
}

WithoutIcon.args = { variant: 'input', searchIcon: null }
