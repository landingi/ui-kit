import { Backdrop } from '@components/Backdrop'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Backdrop',
  component: Backdrop
} as ComponentMeta<typeof Backdrop>

const Template: ComponentStory<typeof Backdrop> = args => (
  <div>
    <Backdrop {...args} />
    <div
      style={{
        width: 100,
        height: 100,
        background: 'red',
        position: 'relative',
        zIndex: 5,
        display: 'inline-block'
      }}
    >
      My z-index is 5
    </div>
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  zIndex: '4'
}
