import { Playground, Props } from 'docz'
import OverflowTooltip from '@components/ui/OverflowTooltip'
import { getMessages } from '@helpers/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# OverflowTooltip

<Props of={OverflowTooltip} />

<Playground>
  <OverflowTooltip content='foobar' placement='right' length={3}>
    <FontAwesomeIcon icon='info-circle' />
  </OverflowTooltip>
</Playground>
