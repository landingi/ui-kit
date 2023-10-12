import { Meta, StoryFn } from '@storybook/react'

import { Textarea, TextareaProps } from './Textarea'

export default {
  title: 'Textarea',
  component: Textarea
} as Meta<typeof Textarea>

const Template: StoryFn<typeof Textarea> = (args: TextareaProps) => (
  <Textarea {...args} />
)

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
