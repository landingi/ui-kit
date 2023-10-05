import { Panel } from '@components/Panel'
import { Paragraph, ParagraphProps } from '@components/Paragraph'
import { Spacer } from '@components/Spacer'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Paragraph',
  component: Paragraph
} as Meta<typeof Paragraph>

const Template: StoryFn<typeof Paragraph> = (args: ParagraphProps) => (
  <Panel>
    <Paragraph {...args}>Hi I am paragraph</Paragraph>
    <Spacer space='medium' />
    <Paragraph {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat
      pretium nibh ipsum consequat nisl. Pretium vulputate sapien nec sagittis
      aliquam malesuada.
    </Paragraph>
  </Panel>
)

export const Normal = Template.bind({})

export const LineThrough = Template.bind({})

export const Uppercase = Template.bind({})

Normal.args = {
  size: 14
}

LineThrough.args = {
  decoration: 'line-through'
}

Uppercase.args = {
  uppercase: true
}
