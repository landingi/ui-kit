import { Tooltip } from '@components/Tooltip'
import type { Meta, StoryObj } from '@storybook/react'
import { Row } from 'simple-flexbox'

import { Button, Icon, PerfectDropdown } from '..'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Row
      justifyContent='center'
      alignItems='center'
      style={{
        height: '300px'
      }}
    >
      <Tooltip content='Bottom tooltip'>
        <div>trigger</div>
      </Tooltip>
    </Row>
  )
}

export const ShowOnClick: Story = {
  render: () => (
    <Row
      justifyContent='center'
      alignItems='center'
      style={{
        height: '300px'
      }}
    >
      <Tooltip content='ShowOnClick tooltip' showOnClick>
        <div>ShowOnClick</div>
      </Tooltip>
    </Row>
  )
}

export const Disabled: Story = {
  render: () => (
    <Row
      justifyContent='center'
      alignItems='center'
      style={{
        height: '300px'
      }}
    >
      <Tooltip content='disabled tooltip' disabled>
        <div>disabled</div>
      </Tooltip>
    </Row>
  )
}

export const OnPerfectDropdown: Story = {
  render: () => (
    <Tooltip content='Bottom tooltip' placement='right'>
      <PerfectDropdown
        hasArrow={false}
        customTrigger={() => <button>trigger</button>}
      >
        <div>test</div>
      </PerfectDropdown>
    </Tooltip>
  )
}
