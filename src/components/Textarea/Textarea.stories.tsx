import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Textarea } from './Textarea'

export default {
  title: 'Textarea',
  component: Textarea
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = args => <Textarea {...args} />

export const Default = Template.bind({})

Default.args = {
  i18n: { placeholder: 'Textarea placeholder', label: 'Label' },
  name: 'textarea',
  id: 'textarea',
  onChange: () => {}
}

export const MaxHeightAndResize = Template.bind({})

MaxHeightAndResize.args = {
  i18n: { placeholder: 'Textarea placeholder' },
  name: 'textarea',
  id: 'textarea',
  onChange: () => {},
  size: 'tiny',
  hasResize: true,
  maxHeight: 180
}
