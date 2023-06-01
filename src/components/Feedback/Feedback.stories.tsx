import { Feedback } from '@components/Feedback'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback',
  component: Feedback
} as ComponentMeta<typeof Feedback>

const Template: ComponentStory<typeof Feedback> = args => <Feedback {...args} />

const defaultProps = {
  handleFeedback: () => alert('Thank you!'),
  i18n: {
    name: 'test',
    content: 'Feedback content.',
    button: 'Share feedback'
  }
}

export const Default = Template.bind({})
export const CutomIcon = Template.bind({})

Default.args = {
  ...defaultProps
}

CutomIcon.args = {
  ...defaultProps,
  customIcon: 'icon-lightbulb'
}
