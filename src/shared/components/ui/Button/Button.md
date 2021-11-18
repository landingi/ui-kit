import { Playground, Props } from 'docz'
import Button from '@components/ui/Button'
import Spreader from '@components/ui/Spreader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# Button

<Props of={Button} />

## Primary

<Playground>
  <Button variant="primary" size="tiny">Primary button</Button>
  <Button variant="primary" size="medium">Primary button</Button>
  <Button variant="primary" size="large">Primary button</Button>

  <br /><br />

  <Button variant="primary" size="tiny" isDisabled>Primary button</Button>
  <Button variant="primary" size="medium" isDisabled>Primary button</Button>
  <Button variant="primary" size="large" isDisabled>Primary button</Button>
</Playground>



## Secondary

<Playground>
  <Button variant="secondary" size="tiny">Secondary button</Button>
  <Button variant="secondary" disabled size="medium">Secondary button</Button>
  <Button variant="secondary" size="large">Secondary button</Button>

  <br /><br />

  <Button variant="secondary" size="tiny" isDisabled>Secondary button</Button>
  <Button variant="secondary" size="medium" isDisabled>Secondary button</Button>
  <Button variant="secondary" size="large" isDisabled>Secondary button</Button>
</Playground>

## Alert

<Playground>
  <Button variant="alert" size="tiny">Delete button</Button>
  <Button variant="alert" size="medium">Delete button</Button>
  <Button variant="alert" size="large">Delete button</Button>

  <br /><br />

  <Button variant="alert" size="tiny" isDisabled>Delete button</Button>
  <Button variant="alert" size="medium" isDisabled>Delete button</Button>
  <Button variant="alert" size="large" isDisabled>Delete button</Button>
</Playground>

## Dropdown

<Playground>
  <Button variant="dropdown" size="tiny">Dropdown button</Button>
  <Button variant="dropdown" size="medium">Dropdown button</Button>
  <Button variant="dropdown" size="large">Dropdown button</Button>

  <br /><br />

  <Button variant="dropdown" size="tiny" isDisabled>Dropdown button</Button>
  <Button variant="dropdown" size="medium" isDisabled>Dropdown button</Button>
  <Button variant="dropdown" size="large" isDisabled>Dropdown button</Button>
</Playground>

## Transparent

<Playground>
  <Button variant="transparent" size="tiny">Transparent button</Button>
  <Button variant="transparent" size="medium">Transparent button</Button>
  <Button variant="transparent" size="large">Transparent button</Button>

  <br /><br />

  <Button variant="transparent" size="tiny" isDisabled>Transparent button</Button>
  <Button variant="transparent" size="medium" isDisabled>Transparent button</Button>
  <Button variant="transparent" size="large" isDisabled>Transparent button</Button>
</Playground>

## Transparent blue

<Playground>
  <Button variant="transparent-blue" size="tiny">Transparent blue button</Button>
  <Button variant="transparent-blue" size="medium">Transparent blue button</Button>
  <Button variant="transparent-blue" size="large">Transparent blue button</Button>

  <br /><br />

  <Button variant="transparent-blue" size="tiny" isDisabled>Transparent blue button</Button>
  <Button variant="transparent-blue" size="medium" isDisabled>Transparent blue button</Button>
  <Button variant="transparent-blue" size="large" isDisabled>Transparent blue button</Button>
</Playground>

## Dropdown element

<Playground>
  <Button variant="dropdown-element" size="tiny">Dropdown element button</Button>
  <Button variant="dropdown-element" size="medium">Dropdown element button</Button>
  <Button variant="dropdown-element" size="large">Dropdown element button</Button>
</Playground>

## Switcher

<Playground>
  <Button variant="switcher" size="tiny">Switcher button</Button>
  <Button variant="switcher" size="medium">Switcher button</Button>
  <Button variant="switcher" size="large">Switcher button</Button>
</Playground>

## Tabs

<Playground>
  <Button variant="tabs" size="tiny">Tabs button</Button>
  <Button variant="tabs" size="medium">Tabs button</Button>
  <Button variant="tabs" size="large">Tabs button</Button>
</Playground>

## Input

<Playground>
  <Button variant="input" size="tiny">Input button</Button>
  <Button variant="input" size="medium">Input button</Button>
  <Button variant="input" size="large">Input button</Button>
</Playground>


## Icon

<Playground>
  <Button variant="icon" size="tiny">
    <FontAwesomeIcon icon="bullhorn" />
  </Button>
  <Button variant="icon" size="medium">
    <FontAwesomeIcon icon="bullhorn" />
  </Button>
  <Button variant="icon" size="large">
    <FontAwesomeIcon icon="bullhorn" />
  </Button>

  <br /><br />

  <Button variant="icon" size="tiny" isDisabled>
    <FontAwesomeIcon icon="bullhorn" />
  </Button>
  <Button variant="icon" size="medium" isDisabled>
    <FontAwesomeIcon icon="bullhorn" />
  </Button>
  <Button variant="icon" size="large" isDisabled>
    <FontAwesomeIcon icon="bullhorn" />
  </Button>
</Playground>

## Icon & label

<Playground>
  <Button variant="secondary" size="tiny" hasIcon>
    <FontAwesomeIcon icon="bullhorn" />
    <span>Good morning</span>
  </Button>
  <Button variant="secondary" size="medium" hasIcon>
    <FontAwesomeIcon icon="bullhorn" />
    <span>Good morning</span>
  </Button>
  <Button variant="secondary" size="large" hasIcon>
    <FontAwesomeIcon icon="bullhorn" />
    <span>Good morning</span>
  </Button>

  <br /><br />

  <Button variant="secondary" size="tiny" hasIcon isDisabled>
    <FontAwesomeIcon icon="bullhorn" />
    <span>Good morning</span>
  </Button>
  <Button variant="secondary" size="medium" hasIcon isDisabled>
    <FontAwesomeIcon icon="bullhorn" />
    <span>Good morning</span>
  </Button>
  <Button variant="secondary" size="large" hasIcon isDisabled>
    <FontAwesomeIcon icon="bullhorn" />
    <span>Good morning</span>
  </Button>
</Playground>

## Button as a link

<Playground>
  <Button tag="a" size="tiny">Button as a link</Button>
</Playground>

## Loader

<Playground>
  <Button variant="Primary" size="tiny" isDisabled isLoading>Loader button</Button>
  <Spreader />
  <Button variant="Primary" size="medium" isDisabled isLoading>Loader button</Button>
  <Spreader />
  <Button variant="Primary" size="large" isDisabled isLoading>Loader button</Button>
</Playground>
