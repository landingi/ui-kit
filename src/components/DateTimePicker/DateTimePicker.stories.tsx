import { DateTimePicker } from '@components/DateTimePicker'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Row } from 'simple-flexbox'

export default {
  title: 'DateTimePicker',
  component: DateTimePicker
} as ComponentMeta<typeof DateTimePicker>

const Template: ComponentStory<typeof DateTimePicker> = args => (
  <Row>
    <DateTimePicker {...args} />
  </Row>
)

export const Default = Template.bind({})

Default.args = {
  setDate: (...state) => {
    // eslint-disable-next-line no-console
    console.log(state)
  },
  i18n: { apply: 'Apply' }
}

export const OneDayVariant = Template.bind({})

OneDayVariant.args = {
  setDate: (...state) => {
    // eslint-disable-next-line no-console
    console.log(state)
  },
  i18n: { apply: 'Apply' },
  oneDatePicker: true
}
