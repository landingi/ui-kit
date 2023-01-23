import { MaskedInputForm } from '@components/Form/Input/MaskedInputForm'
import { ComponentMeta, Story } from '@storybook/react'
import { FC, useState } from 'react'

export default {
  title: 'MaskedInputForm',
  component: MaskedInputForm
} as ComponentMeta<typeof MaskedInputForm>

const Demo: FC = () => {
  const [phone, setPhone] = useState('')

  return (
    <MaskedInputForm
      i18n={{ placeholder: 'Test placeholder', label: 'Test label' }}
      type='text'
      field={{
        name: 'phone',
        value: phone,
        onChange: ({ target: { value } }) => setPhone(value),
        onBlur: () => {}
      }}
      form={{
        errors: {},
        touched: {}
      }}
      guide
      mask={[
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
      ]}
    />
  )
}

const Template: Story = args => <Demo {...args} />

export const Default = Template.bind({})

Default.args = {}
