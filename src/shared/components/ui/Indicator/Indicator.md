import { Playground, Props } from 'docz'
import Indicator from '@components/ui/Indicator'
import Button from '@components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# Indicator

<Props of={Indicator} />

<Playground>
  <Indicator isAlert>
    <Button variant="icon">
      <FontAwesomeIcon icon="bullhorn" />
    </Button>
  </Indicator>
</Playground>
