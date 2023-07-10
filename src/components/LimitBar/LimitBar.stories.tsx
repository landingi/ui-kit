import { LimitBar } from '@components/LimitBar'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Column } from 'simple-flexbox'

export default {
  title: 'LimitBar',
  component: LimitBar,
  argTypes: {
    className: { control: 'text' }
  }
} as ComponentMeta<typeof LimitBar>

const Template: ComponentStory<typeof LimitBar> = args => (
  <div>
    <Column style={{ width: 300, border: '1px solid' }}>
      <LimitBar {...args} />
    </Column>
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  limit: 20000,
  quantity: 10000,
  limitText: 'Limit'
}

export const Unlimited = Template.bind({})

Unlimited.args = {
  limit: -1,
  quantity: 10000,
  limitText: 'Unlimited'
}
