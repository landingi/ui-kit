import { IntlProvider } from 'react-intl'
import { Playground, Props } from 'docz'
import Input from '@components/ui/Input'

# Input

<Props of={Input} />

<Playground>
  <IntlProvider>
    <Input  />
  </IntlProvider>
</Playground>

## Placeholder

<Playground>
  <IntlProvider>
    <Input placeholder='placeholder' />
  </IntlProvider>
</Playground>

## Read Only

<Playground>
  <IntlProvider>
    <Input readonly={true} />
  </IntlProvider>
</Playground>

## Disabled

<Playground>
  <IntlProvider>
    <Input disabled={true} />
  </IntlProvider>
</Playground>

## Label

<Playground>
  <IntlProvider>
    <Input label='label' />
  </IntlProvider>
</Playground>

## Name

<Playground>
  <IntlProvider>
    <Input name='inputName' />
  </IntlProvider>
</Playground>
