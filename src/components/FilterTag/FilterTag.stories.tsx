import { FilterTag, FilterTagProps } from '@components/FilterTag'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'FilterTag',
  component: FilterTag
} as Meta<typeof FilterTag>

const Template: StoryFn<typeof FilterTag> = (args: FilterTagProps) => (
  <FilterTag {...args} />
)

export const VariantPrimary = Template.bind({})

export const VariantSecondary = Template.bind({})

export const VariantPrimaryDisabled = Template.bind({})

VariantPrimary.args = {
  children: (
    <p>
      I am child, <b>bold</b>
    </p>
  )
}

VariantSecondary.args = { children: 'Secondary', variant: 'secondary' }

VariantPrimaryDisabled.args = { children: 'Primary Disabled', isDisabled: true }
