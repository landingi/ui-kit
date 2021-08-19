import { Playground, Props } from 'docz'
import Tooltip from '@components/ui/Tooltip'

# Tooltip

<Props of={Tooltip} />

<Playground>
  <Tooltip content="Bottom tooltip">Bottom tooltip</Tooltip>

  <Tooltip content="Left tooltip" placement="left">
    Left tooltip
  </Tooltip>

  <Tooltip content="Right tooltip" placement="right">
    Right tooltip
  </Tooltip>

  <Tooltip content="Top tooltip" placement="top">
    Top tooltip
  </Tooltip>
</Playground>
