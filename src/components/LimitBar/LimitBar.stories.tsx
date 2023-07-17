import { LimitBar } from '@components/LimitBar'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Column } from 'simple-flexbox'

export default {
  title: 'LimitBar',
  component: LimitBar,
  argTypes: {
    className: { control: 'text' },
    limit: { control: 'number' },
    quantity: { control: 'number' },
    regularLimit: { control: 'number' },
    tooltip: { control: 'text' },
    tooltipInQuantity: { control: 'text' }
  }
} as ComponentMeta<typeof LimitBar>

const Template: ComponentStory<typeof LimitBar> = args => (
  <div>
    <Column style={{ width: 300, border: '1px solid' }}>
      <LimitBar {...args} />
      <LimitBar {...args} />
    </Column>
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  limit: 20000,
  quantity: 10000,
  limitText: 'Limit',
  padding: 'medium'
}

export const Unlimited = Template.bind({})

Unlimited.args = {
  limit: -1,
  quantity: 10000,
  limitText: 'Unlimited'
}

export const RegularLimit = Template.bind({})

RegularLimit.args = {
  limit: 20000,
  quantity: 10000,
  limitText: 'Regular Limit',
  regularLimit: 30000,
  tooltipInQuantity: 'Tooltip'
}
