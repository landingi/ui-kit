import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PerfectDropdownSelect } from './PerfectDropdownSelect'

export default {
  title: 'PerfectDropdownSelect',
  component: PerfectDropdownSelect
} as ComponentMeta<typeof PerfectDropdownSelect>

const Template: ComponentStory<typeof PerfectDropdownSelect> = args => (
  <PerfectDropdownSelect {...args} />
)

export const Default = Template.bind({})

Default.args = {
  formikKey: 'test-dropdown',
  value: 'test1',
  options: [
    { label: 'label1', value: 'test1' },
    { label: 'label2', value: 'test2' }
  ],
  label: 'Custom label for dropdown',
  onChange: () => {}
}

export const WithoutValue = Template.bind({})

WithoutValue.args = {
  formikKey: 'test-dropdown',
  options: [
    { label: 'label1', value: 'test1' },
    { label: 'label2', value: 'test2' }
  ],
  label: "Now I'm placeholder",
  onChange: () => {}
}

export const WithEmphasidedOptionsAndDescription = Template.bind({})

WithEmphasidedOptionsAndDescription.args = {
  formikKey: 'test-dropdown',
  value: 'test3',
  options: [
    { label: 'label1', value: 'test1', description: 'opis 1' },
    { label: 'label2', value: 'test2' }
  ],
  emphasisedOptions: [
    {
      label: 'wyróżniona opcja ',
      value: 'test3',
      description: 'opis wyróżnionej opcji'
    }
  ],
  label: 'Custom label for dropdown',
  onChange: () => {},
  hasDescription: true
}

export const Disabled = Template.bind({})

Disabled.args = {
  formikKey: 'test-dropdown',
  value: 'test1',
  options: [
    { label: 'label1', value: 'test1' },
    { label: 'label2', value: 'test2' }
  ],
  label: 'Custom label for dropdown',
  onChange: () => {},
  isOpenDisabled: true
}

export const Searcher = Template.bind({})

Searcher.args = {
  formikKey: 'test-dropdown',
  value: 'test1',
  options: [
    { label: 'label1', value: 'test1' },
    { label: 'label2', value: 'test2' }
  ],
  label: 'Custom label for dropdown',
  onChange: () => {},
  hasSearcher: true,
  i18n: {
    placeholder: 'Search'
  }
}

export const EmptyMessage = Template.bind({})

EmptyMessage.args = {
  formikKey: 'test-dropdown',
  value: 'test1',
  options: [],
  label: 'Custom label for dropdown',
  onChange: () => {},
  emptyMessage: 'Pusto tutaj'
}

export const WithLoader = Template.bind({})

WithLoader.args = {
  formikKey: 'test-dropdown',
  value: 'test1',
  options: [
    { label: 'label1', value: 'test1' },
    { label: 'label2', value: 'test2' }
  ],
  label: 'Custom label for dropdown',
  onChange: () => {},
  hasSearcher: true,
  i18n: {
    placeholder: 'Search'
  },
  isLoading: true
}
