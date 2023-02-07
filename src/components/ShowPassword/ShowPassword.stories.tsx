import { ShowPassword } from '@components/ShowPassword'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'ShowPassword',
  component: ShowPassword
} as ComponentMeta<typeof ShowPassword>

const Template: ComponentStory<typeof ShowPassword> = args => (
  <ShowPassword {...args} />
)

const i18n = {
  show: 'show',
  hide: 'hide'
}

export const Default = Template.bind({})

Default.args = {
  i18n
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  i18n,
  hasLabel: true
}
