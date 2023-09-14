import { Backdrop, BackdropProps } from '@components/Backdrop'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Backdrop',
  component: Backdrop
} as Meta<typeof Backdrop>

const Template: StoryFn<typeof Backdrop> = (
  args: BackdropProps & {
    redBlockZIndex: number
  }
) => {
  const { redBlockZIndex } = args
  return (
    <div>
      <Backdrop {...args} />
      <div
        style={{
          width: 100,
          height: 100,
          background: 'red',
          position: 'relative',
          zIndex: redBlockZIndex,
          display: 'inline-block'
        }}
      >
        My z-index is {redBlockZIndex}
      </div>
    </div>
  )
}

export const Basic = Template.bind({})
export const withCustomZIndex = Template.bind({})

Basic.args = {
  zIndex: '4',
  redBlockZIndex: 5
}

withCustomZIndex.args = {
  redBlockZIndex: 15,
  customZIndex: 10
}
