import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Modal } from './Modal'

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

const i18n = {
  title: 'Lorem ipsum dolor sit amet.',
  action: 'Action',
  cancel: 'Cancel'
}

const children = <p>Lorem ipsum dolor sit amet.</p>

export const Default = Template.bind({})

Default.args = {
  i18n,
  children,
  isActive: true
}

export const WithFooter = Template.bind({})

WithFooter.args = {
  i18n,
  children,
  isActive: true,
  hasFooter: true
}

export const WithCustomButton = Template.bind({})

WithCustomButton.args = {
  i18n: {
    ...i18n,
    cancel: 'Custom button'
  },
  children,
  isActive: true,
  hasFooter: true,
  hasCustomButton: true
}

export const WithAnimation = Template.bind({})

WithAnimation.args = {
  i18n,
  children,
  isActive: true,
  isClosable: true,
  size: 'fullscreen',
  hasAnimation: true
}
