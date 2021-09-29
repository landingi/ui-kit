import { Playground, Props } from 'docz'
import StatsBadge from '@components/ui/StatsBadge'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# StatsBadge

<Props of={StatsBadge} />

## Variant

<Playground>
  <IntlProvider
    locale='en'
    messages={getMessages['en']}>
    <StatsBadge
      description='word.total.subaccounts'
      quantity={100} />
    <StatsBadge
      description='word.active.subaccounts'
      quantity={30}
      color='yellow' />
    <StatsBadge
      description='word.active.subaccounts'
      quantity={60}
      color='pink' />
  </IntlProvider>
</Playground>
