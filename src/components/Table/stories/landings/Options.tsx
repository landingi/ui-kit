import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { PerfectDropdown } from '@components/PerfectDropdown'
import { Row } from 'simple-flexbox'

export const Options = () => (
  <Row alignItems='center'>
    <PerfectDropdown size='large' icon='icon-folder' label='Move '>
      move modal
    </PerfectDropdown>

    <Button variant='transparent' hasIcon>
      <Icon icon='icon-archive' />

      <span>Archive</span>
    </Button>
  </Row>
)

Options.displayName = 'Options'
