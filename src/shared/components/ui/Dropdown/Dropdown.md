import { Playground, Props } from 'docz'
import Dropdown from '@components/ui/Dropdown'
import Spacer from '@components/ui/Spacer'
import Divider from '@components/ui/Divider'
import Button from '@components/ui/Button'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import Label from '@components/ui/Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# Dropdown

<Props of={Dropdown} />

## Normal

<Playground>
  <Dropdown label="Just a simple dropdown">
    <List>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          Your profile
        </Button>
      </ListItem>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          Your profile
        </Button>
      </ListItem>
    </List>
  </Dropdown>
</Playground>

## Head

<Playground>
  <Dropdown label="Dropdown with head">
    <DropdownHead>
      <Heading level={4}>Kamil</Heading>
      <Heading level={5}>kamil@landingi.com</Heading>
    </DropdownHead>
    <Spacer />
    <Label>Group Name</Label>
    <Divider />
    <List>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          Your profile
        </Button>
      </ListItem>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          Your profile
        </Button>
      </ListItem>
    </List>
    <Label>Group Name</Label>
    <Divider />
    <List>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          Your profile
        </Button>
      </ListItem>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          Your profile
        </Button>
      </ListItem>
    </List>
  </Dropdown>
</Playground>

## Icons

<Playground>
  <Dropdown label="Hey, just a cool dropdown with some icons">
    <List>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          <FontAwesomeIcon icon='flask' /> Labs
        </Button>
      </ListItem>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          <FontAwesomeIcon icon='users' /> Users
        </Button>
      </ListItem>
      <ListItem className="list-item--dropdown">
        <Button tag="a" href="#" title="">
          <FontAwesomeIcon icon='clone' />
          Invoices
        </Button>
      </ListItem>
    </List>
  </Dropdown>
</Playground>

## Account

<Playground>
<Dropdown icon="faUserCircle" label="User acount dropdown">
  <DropdownHead>
    <Heading level={4}>Kamil</Heading>
    <Heading level={5}>kamil@landingi.com</Heading>
  </DropdownHead>
  <Spacer />
  <List>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='user-circle' />
        Your profile
      </Button>
    </ListItem>
  </List>
  <Spacer />
  <Label>ACCOUNT SETTINGS</Label>
  <Divider />
  <List>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='site-map' />
        Subaccounts
      </Button>
    </ListItem>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='user-secret' />
        Admins
      </Button>
    </ListItem>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='users' />
        Users
      </Button>
    </ListItem>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='flask' />
        Labs
      </Button>
    </ListItem>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='clone' />
        Invoices
      </Button>
    </ListItem>
  </List>
  <Divider />
  <List>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='credit-card' />
        Payments
      </Button>
    </ListItem>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='percent' />
        Affiliate program
      </Button>
    </ListItem>
  </List>
  <Divider />
  <List>
    <ListItem className="list-item--dropdown">
      <Button tag="a" href="#" title="">
        <FontAwesomeIcon icon='sign-out-alt' />
        Logout
      </Button>
    </ListItem>
  </List>
</Dropdown>
</Playground>
