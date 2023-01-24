import { Input } from '@components/Input'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  i18n: { placeholder: 'Test placeholder', label: 'Test label' },
  type: 'text'
}

export const AlwaysShowLabel = Template.bind({})

AlwaysShowLabel.args = {
  i18n: { placeholder: 'Test placeholder', label: 'Test label' },
  type: 'text',
  alwaysShowLabel: true
}

export const Disabled = Template.bind({})

Disabled.args = {
  i18n: { placeholder: 'Test placeholder', label: 'Test label' },
  type: 'text',
  alwaysShowLabel: true,
  disabled: true
}

export const TableVariant = Template.bind({})

TableVariant.args = {
  i18n: { placeholder: 'Test placeholder' },
  type: 'text',
  background: 'transparent',
  variant: 'table'
}

export const TableVariantWithTooltip = Template.bind({})

TableVariantWithTooltip.args = {
  i18n: { placeholder: 'Test placeholder' },
  type: 'text',
  background: 'transparent',
  variant: 'table',
  tooltip: 'testing'
}

export const TableVariantWithDescription = Template.bind({})

TableVariantWithDescription.args = {
  i18n: { placeholder: 'Test placeholder', description: 'test desctiption' },
  type: 'text',
  background: 'transparent',
  variant: 'table',
  tooltip: 'testing'
}
