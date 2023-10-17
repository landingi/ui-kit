import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'

export const RowActions = () => (
  <List variant='inline'>
    <ListItem variant='inline'>
      <Button tag='a' target='_blank' variant='transparent' hasIcon buttonStyle>
        <Icon icon='icon-create' />

        <span>edit</span>
      </Button>

      <Button tag='a' variant='transparent' hasIcon buttonStyle>
        <Icon icon='icon-dashboard' />

        <span>dashboard</span>
      </Button>

      <Button tag='a' variant='transparent' hasIcon buttonStyle>
        <Icon icon='icon-user' />

        <span>Leads</span>
      </Button>
    </ListItem>
  </List>
)
