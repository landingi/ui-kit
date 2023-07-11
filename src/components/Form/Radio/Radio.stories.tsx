import { Radio, RadioProps } from '@components/Form/Radio'
import { ComponentMeta, Story } from '@storybook/react'
import { FC, Fragment, useState } from 'react'

export default {
  title: 'Form Radio',
  component: Radio
} as ComponentMeta<typeof Radio>

const Demo: FC<Pick<RadioProps, 'disabled'>> = ({ disabled }) => {
  const [checked, setChecked] = useState('')

  return (
    <Fragment>
      <Radio
        disabled={disabled}
        id='Obelix'
        label='Obelix'
        field={{
          name: 'Obelix',
          onChange: () => setChecked('Obelix'),
          onBlur: () => {},
          value: checked
        }}
      />

      <br />

      <Radio
        disabled={disabled}
        id='Asterix'
        label='Asterix'
        field={{
          name: 'Asterix',
          onChange: () => setChecked('Asterix'),
          onBlur: () => {},
          value: checked
        }}
      />
    </Fragment>
  )
}

const Template: Story = args => <Demo {...args} />

export const Default = Template.bind({})

Default.args = {
  disabled: true
}
