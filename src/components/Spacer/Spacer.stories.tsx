import { Button } from '@components/Button'
import { Spacer, SpacerProps } from '@components/Spacer'
import { Meta, StoryFn } from '@storybook/react'
import { Fragment } from 'react'

export default {
  title: 'Spacer',
  component: Spacer
} as Meta<typeof Spacer>

const Template: StoryFn<typeof Spacer> = (args: SpacerProps) => (
  <Fragment>
    <Button>Button</Button>

    <Spacer {...args} />

    <Button>Button</Button>
  </Fragment>
)

export const Mini = Template.bind({})
export const Tiny = Template.bind({})
export const Small = Template.bind({})
export const Regular = Template.bind({})
export const Large = Template.bind({})
export const Medium = Template.bind({})
export const Big = Template.bind({})
export const Huge = Template.bind({})

Mini.args = {
  space: 'mini'
}

Tiny.args = {
  space: 'tiny'
}

Small.args = {
  space: 'small'
}

Medium.args = {
  space: 'medium'
}

Regular.args = {
  space: 'regular'
}

Large.args = {
  space: 'large'
}

Big.args = {
  space: 'big'
}

Huge.args = {
  space: 'huge'
}
