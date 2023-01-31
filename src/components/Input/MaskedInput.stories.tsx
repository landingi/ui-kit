import { MaskedInput } from '@components/Input/MaskedInput'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'MaskedInput',
  component: MaskedInput
} as ComponentMeta<typeof MaskedInput>

const Template: ComponentStory<typeof MaskedInput> = args => (
  <MaskedInput {...args} />
)

export const WithGuide = Template.bind({})

WithGuide.args = {
  i18n: {
    placeholder: 'e.x. (222) 222-2222',
    label: 'e.x. (222) 222-2222'
  },
  guide: true,
  mask: [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]
}

export const WithoutGuide = Template.bind({})

WithoutGuide.args = {
  i18n: {
    placeholder: 'e.x. (222) 222-2222',
    label: 'e.x. (222) 222-2222'
  },
  mask: [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]
}
