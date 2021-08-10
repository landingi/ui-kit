import { Playground, Props } from 'docz'
import Drawer from '@components/ui/Drawer'

# Drawer

<Props of={Drawer} />

## Active

<Playground>
  <Drawer data={{ title:'Title' }} isActive={true}>
    Children
  </Drawer>
</Playground>

## Hidden

<Playground>
  <Drawer data={{ title:'Title' }} isActive={false}>
    Children
  </Drawer>
</Playground>
