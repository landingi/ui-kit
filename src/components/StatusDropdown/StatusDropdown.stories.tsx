import { StatusDropdown } from '@components/StatusDropdown'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Column, Row } from 'simple-flexbox'

export default {
  title: 'StatusDropdown',
  component: StatusDropdown
} as ComponentMeta<typeof StatusDropdown>

const Template: ComponentStory<typeof StatusDropdown> = args => (
  <Column>
    <Row style={{ width: '200px' }}>
      <StatusDropdown {...args} />
    </Row>
  </Column>
)

export const Default = Template.bind({})

Default.args = {
  label: 'Default'
}

export const Success = Template.bind({})

Success.args = {
  label: 'Success!',
  status: 'success'
}

export const Warning = Template.bind({})

Warning.args = {
  label: 'Warning',
  status: 'warning'
}

export const Info = Template.bind({})

Info.args = {
  label: 'Info',
  status: 'info'
}

export const Alert = Template.bind({})

Alert.args = {
  label: 'Alert',
  status: 'alert'
}
