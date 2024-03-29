import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { TimeSelect } from './TimeSelect'

export default {
  title: 'TimeSelect',
  component: TimeSelect
} as ComponentMeta<typeof TimeSelect>

const Template: ComponentStory<typeof TimeSelect> = args => {
  const [value, setValue] = useState('12:00')

  return <TimeSelect {...args} value={value} onChange={setValue} />
}

export const AmPmType = Template.bind({})

AmPmType.args = {
  isAmPmType: true
}

export const DefaultType = Template.bind({})

DefaultType.args = {
  isAmPmType: false
}
