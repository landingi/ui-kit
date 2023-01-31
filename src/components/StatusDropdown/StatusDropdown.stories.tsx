import { StatusDropdown } from '@components/StatusDropdown'
import { Spacer } from '@components/Spacer'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Row, Column } from 'simple-flexbox'

export default {
    title: 'StatusDropdown',
    component: StatusDropdown
} as ComponentMeta<typeof StatusDropdown>

const Template: ComponentStory<typeof StatusDropdown> = args => (
    <Column>
        <Row>StatusDropdown in 200px wide Row, adjusts its width to parent</Row>

        <Spacer space='small' />

        <Row style={{ width: '200px' }}>
            <StatusDropdown {...args} />
        </Row>
    </Column>
)

export const Default = Template.bind({})

Default.args = {
    label: 'Default',
}

export const Success = Template.bind({})

Success.args = {
    label: 'Success!',
    status: 'success'
}

export const Warning = Template.bind({})

Warning.args = {
    label: 'Warning',
    status: 'warning',
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