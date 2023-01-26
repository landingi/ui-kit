import { Icon } from '@components/Icon'
import { OverflowTooltip } from '@components/OverflowTooltip'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Row } from 'simple-flexbox'

export default {
  title: 'OverflowTooltip',
  component: OverflowTooltip
} as ComponentMeta<typeof OverflowTooltip>

const Template: ComponentStory<typeof OverflowTooltip> = args => (
  <Row
    justifyContent='center'
    alignItems='center'
    style={{
      height: '300px'
    }}
  >
    <OverflowTooltip {...args} />
  </Row>
)

export const Default = Template.bind({})

Default.args = {
  children: (
    <div>
      <Icon icon='icon-info-circle' />
    </div>
  ),
  content: 'Foo bar Foo bar Foo bar Foo bar Foo bar',
  placement: 'right',
  length: 3
}

export const NoChildren = Template.bind({})

NoChildren.args = {
  content: 'Foo bar Foo bar Foo bar Foo bar Foo bar',
  placement: 'right',
  length: 3
}
