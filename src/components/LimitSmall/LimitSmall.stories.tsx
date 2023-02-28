import { LimitSmall } from '@components/LimitSmall'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Column } from 'simple-flexbox'

export default {
  title: 'LimitSmall',
  component: LimitSmall,
  argTypes: {
    className: { control: 'text' }
  }
} as ComponentMeta<typeof LimitSmall>

const Template: ComponentStory<typeof LimitSmall> = args => (
  <div>
    Border is here just to show how padding looks like.
    <br />
    <Column style={{ width: 300, border: '1px solid' }}>
      <LimitSmall {...args} />
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
