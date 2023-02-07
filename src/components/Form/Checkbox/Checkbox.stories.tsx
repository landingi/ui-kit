import { Checkbox } from '@components/Form/Checkbox'
import { ComponentMeta, Story } from '@storybook/react'
import { FC, useState } from 'react'

export default {
  title: 'Form Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Demo: FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      id='phone'
      label='jestem checkboxem'
      field={{
        name: 'phone',
        value: checked,
        onChange: () => setChecked(checked => !checked),
        onBlur: () => {}
      }}
      form={{
        errors: {},
        touched: {}
      }}
    />
  )
}

const Template: Story = args => <Demo {...args} />

export const Default = Template.bind({})

Default.args = {}
