import { Loader, LoaderProps } from '@components/Loader'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Loader',
  component: Loader
} as Meta<typeof Loader>

const Template: StoryFn<typeof Loader> = (args: LoaderProps) => (
  <Loader {...args} />
)

export const Default = Template.bind({})
export const Shapes = Template.bind({})

Default.args = {
  variant: 'default'
}

Shapes.args = {
  variant: 'shapes'
}
