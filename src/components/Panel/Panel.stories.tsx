import type { Meta, StoryObj } from '@storybook/react'

import { Panel } from './Panel'

const meta: Meta<typeof Panel> = {
  component: Panel
}

export default meta
type Story = StoryObj<typeof Panel>

const children =
  'Integer et neque efficitur, lobortis nulla eget, porttitor augue. Integer eget tortor sed libero tincidunt semper vitae id mi.Integer et neque efficitur, lobortis nulla eget, porttitor augue. Integer eget tortor sed libero tincidunt semper vitae id mi.Integer et neque efficitur, lobortis nulla eget, porttitor augue. Integer eget tortor sed libero tincidunt semper vitae id mi.Integer et neque efficitur, lobortis nulla eget, porttitor augue. Integer eget tortor sed libero tincidunt semper vitae id mi.'

export const PaddingDefault: Story = {
  render: () => <Panel variant='padding-default'>{children}</Panel>
}

export const PaddingTiny: Story = {
  render: () => <Panel variant='padding-tiny'>{children}</Panel>
}

export const PaddingNoLeftRight: Story = {
  render: () => <Panel variant='padding-nolr'>{children}</Panel>
}

export const PaddingNone: Story = {
  render: () => <Panel variant='padding-none'>{children}</Panel>
}

export const PaddingInput: Story = {
  render: () => <Panel variant='padding-input'>{children}</Panel>
}

export const CustomBoxShadow: Story = {
  render: () => <Panel customBoxShadow='none'>{children}</Panel>
}

export const HasShadow: Story = {
  render: () => <Panel hasShadow={false}>{children}</Panel>
}

export const BorderRadius: Story = {
  render: () => <Panel borderRadius='50px'>{children}</Panel>
}
