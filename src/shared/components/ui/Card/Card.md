import { Playground, Props } from 'docz'
import Card from '@components/ui/Card'
import ColorNumber from '@components/ui/ColorNumber'

# Card

<Props of={Card} />

## Success

<Playground>
  <Card variant='success'>
    <ColorNumber variant='success'> 5 </ColorNumber>
    <ColorNumber variant='warning'> 5 </ColorNumber>
    <ColorNumber variant='alert'> 5 </ColorNumber>
  </Card>
</Playground>

## Warning

<Playground>
  <Card variant='warning'>
    <ColorNumber variant='success'> 5 </ColorNumber>
    <ColorNumber variant='warning'> 5 </ColorNumber>
    <ColorNumber variant='alert'> 5 </ColorNumber>
  </Card>
</Playground>

## Alert

<Playground>
  <Card variant='alert'>
    <ColorNumber variant='success'> 5 </ColorNumber>
    <ColorNumber variant='warning'> 5 </ColorNumber>
    <ColorNumber variant='alert'> 5 </ColorNumber>
  </Card>
</Playground>
