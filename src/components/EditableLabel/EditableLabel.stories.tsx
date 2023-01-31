import { EditableLabel } from '@components/EditableLabel'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'EditableLabel',
  component: EditableLabel
} as ComponentMeta<typeof EditableLabel>

const Template: ComponentStory<typeof EditableLabel> = args => (
  <EditableLabel {...args} />
)

export const SizeDefault = Template.bind({})

SizeDefault.args = {
  initialName: 'Happy landing page'
}

export const SizeSmall = Template.bind({})

SizeSmall.args = {
  initialName: 'Happy landing page',
  size: 'small'
}

export const WithPlaceholder = Template.bind({})

WithPlaceholder.args = {
  initialName: 'Happy landing page',
  placeholder: 'Landing page name'
}

export const WithPlaceholderSmall = Template.bind({})

WithPlaceholderSmall.args = {
  initialName: 'Happy landing page',
  placeholder: 'Landing page name',
  size: 'small'
}

export const IsLoading = Template.bind({})

IsLoading.args = {
  initialName: 'Happy landing page',
  isLoading: true
}

export const IsLoadingSmall = Template.bind({})

IsLoadingSmall.args = {
  initialName: 'Happy landing page',
  size: 'small',
  isLoading: true
}

export const IsDisabled = Template.bind({})

IsDisabled.args = {
  initialName: 'Happy landing page',
  isDisabled: true
}

export const IsDisabledSmall = Template.bind({})

IsDisabledSmall.args = {
  initialName: 'Happy landing page',
  size: 'small',
  isDisabled: true
}

export const IsClickable = Template.bind({})

IsClickable.args = {
  initialName: 'Happy landing page',
  isClickable: true
}

export const IsClickableSmall = Template.bind({})

IsClickableSmall.args = {
  initialName: 'Happy landing page',
  size: 'small',
  isClickable: true
}

export const LongName = Template.bind({})

LongName.args = {
  initialName: 'Your happy landing page bla bla bla bla bla bla bla bla bla',
  isClickable: true
}

export const LongNameSmall = Template.bind({})

LongNameSmall.args = {
  initialName: 'Your happy landing page bla bla bla bla bla bla bla bla bla',
  size: 'small',
  isClickable: true
}
