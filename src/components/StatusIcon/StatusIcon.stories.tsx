import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StatusIcon } from './StatusIcon'

export default {
  title: 'StatusIcon',
  component: StatusIcon
} as ComponentMeta<typeof StatusIcon>

const Template: ComponentStory<typeof StatusIcon> = args => (
  <StatusIcon {...args} />
)

// Tiny

export const TinyActive = Template.bind({})

TinyActive.args = {
  size: 'tiny',
  variant: 'active'
}

export const TinyInactive = Template.bind({})

TinyInactive.args = {
  size: 'tiny',
  variant: 'inactive'
}

export const TinyWarning = Template.bind({})

TinyWarning.args = {
  size: 'tiny',
  variant: 'warning'
}

// Medium

export const MediumActive = Template.bind({})

MediumActive.args = {
  size: 'medium',
  variant: 'active'
}

export const MediumInactive = Template.bind({})

MediumInactive.args = {
  size: 'medium',
  variant: 'inactive'
}

export const MediumWarning = Template.bind({})

MediumWarning.args = {
  size: 'medium',
  variant: 'warning'
}

// Big

export const BigActive = Template.bind({})

BigActive.args = {
  size: 'big',
  variant: 'active'
}

export const BigInactive = Template.bind({})

BigInactive.args = {
  size: 'big',
  variant: 'inactive'
}

export const BigWarning = Template.bind({})

BigWarning.args = {
  size: 'big',
  variant: 'warning'
}

// tooltip

export const TooltipBigActive = Template.bind({})

TooltipBigActive.args = {
  size: 'big',
  variant: 'active',
  tooltip: 'Tooltip'
}

export const TooltipBigInactive = Template.bind({})

TooltipBigInactive.args = {
  size: 'big',
  variant: 'inactive',
  tooltip: 'Tooltip'
}

export const TooltipBigWarning = Template.bind({})

TooltipBigWarning.args = {
  size: 'big',
  variant: 'warning',
  tooltip: 'Tooltip'
}
