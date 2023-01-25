import { Tooltip } from '@components/Tooltip'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Row } from 'simple-flexbox'

export default {
  title: 'Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => (
  <Row
    justifyContent='center'
    alignItems='center'
    style={{
      height: '300px'
    }}
  >
    <Tooltip {...args}>
      <div>trigger</div>
    </Tooltip>
  </Row>
)

export const Bottom = Template.bind({})

Bottom.args = {
  content: 'Bottom tooltip'
}

export const Left = Template.bind({})

Left.args = {
  content: 'Left tooltip',
  placement: 'left'
}

export const Right = Template.bind({})

Right.args = {
  content: 'right tooltip',
  placement: 'right'
}

export const Top = Template.bind({})

Top.args = {
  content: 'Top tooltip',
  placement: 'top'
}

export const ShowOnClick = Template.bind({})

ShowOnClick.args = {
  content: 'Top tooltip',
  placement: 'top',
  showOnClick: true
}

export const EffectFloat = Template.bind({})

EffectFloat.args = {
  content: 'EffectFloat',
  placement: 'top',
  effect: 'float'
}

export const Disabled = Template.bind({})

Disabled.args = {
  content: 'Disabled',
  placement: 'top',
  disabled: true
}
