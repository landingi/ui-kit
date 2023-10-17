import { Button, ButtonProps } from '@components/Button'
import { Icon } from '@components/Icon'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Button',
  component: Button
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <div>
    <Button {...args}>Button</Button>
    <br />
  </div>
)

const TemplateWithIcon: StoryFn<typeof Button> = (args: ButtonProps) => (
  <div>
    <Button {...args}>
      <Icon icon='icon-bullhorn' />
      Button
    </Button>
    <br />
  </div>
)

const TemplateWithLink: StoryFn<typeof Button> = (args: ButtonProps) => (
  <div>
    <Button {...args} tag='a'>
      Link
    </Button>

    <br />
    <br />
    <br />

    <Button {...args} tag='a' buttonStyle>
      Link with button style
    </Button>
  </div>
)

export const Basic = Template.bind({})
export const WithIcon = TemplateWithIcon.bind({})
export const WithLink = TemplateWithLink.bind({})

Basic.args = {
  variant: 'primary',
  size: 'medium',
  align: 'left',
  isLoading: false,
  isDisabled: false,
  hasBackgoundRipple: true,
  hasIcon: false
}

WithIcon.args = {
  ...Basic.args,
  hasIcon: true
}

WithLink.args = {
  ...Basic.args
}
