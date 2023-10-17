import { Panel, PanelProps } from '@components/Panel'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Panel',
  component: Panel
} as Meta<typeof Panel>

const Template: StoryFn<typeof Panel> = (args: PanelProps) => (
  <div>
    <Panel {...args}>
      <p>I am just a paragraph</p>
    </Panel>
    <br />
    <Panel {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat
      pretium nibh ipsum consequat nisl. Pretium vulputate sapien nec sagittis
      aliquam malesuada. Tempor orci eu lobortis elementum nibh. Id donec
      ultrices tincidunt arcu. Eleifend donec pretium vulputate sapien nec. Quam
      viverra orci sagittis eu. Eget felis eget nunc lobortis. Donec enim diam
      vulputate ut pharetra. Morbi tincidunt augue interdum velit euismod in
      pellentesque. Nisi scelerisque eu ultrices vitae. Cum sociis natoque
      penatibus et magnis dis parturient montes. Velit euismod in pellentesque
      massa placerat. Dolor purus non enim praesent. Pellentesque nec nam
      aliquam sem et tortor. Ultricies mi quis hendrerit dolor. Nisl pretium
      fusce id velit ut tortor pretium. Ipsum consequat nisl vel pretium lectus
      quam id leo in. Massa ultricies mi quis hendrerit dolor magna eget est.
      Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.
      Interdum varius sit amet mattis vulputate. Faucibus et molestie ac feugiat
      sed lectus vestibulum mattis. Non tellus orci ac auctor augue mauris
      augue. Pellentesque id nibh tortor id aliquet. Ut diam quam nulla
      porttitor massa id neque aliquam. Odio morbi quis commodo odio aenean sed
      adipiscing. Venenatis a condimentum vitae sapien pellentesque habitant
      morbi tristique senectus. Et egestas quis ipsum suspendisse ultrices. Duis
      tristique sollicitudin nibh sit amet commodo. Turpis egestas integer eget
      aliquet nibh praesent tristique magna sit. Orci dapibus ultrices in
      iaculis nunc sed. Lectus vestibulum mattis ullamcorper velit sed
      ullamcorper morbi tincidunt ornare.
    </Panel>
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  variant: 'padding-default'
}
