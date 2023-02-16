import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Picker } from './Picker'

export default {
  title: 'MonthRangePicker',
  component: Picker
} as ComponentMeta<typeof Picker>

const Template: ComponentStory<typeof Picker> = args => (
  <div style={{ width: '310px' }}>
    <Picker {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  minDate: new Date(2021, 10, 11),
  maxDate: new Date(2023, 10, 11),
  onChange: value => {
    // eslint-disable-next-line no-console
    console.log(value)
  }
}
