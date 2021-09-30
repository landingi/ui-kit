import { IntlProvider } from 'react-intl'
import { Playground, Props } from 'docz'
import Input from '@components/ui/Input'

# Input

<Props of={Input} />

<Playground>
  <IntlProvider>
    <Input
      placeholder='Just placeholder'
      type="text"  />
  </IntlProvider>
</Playground>
