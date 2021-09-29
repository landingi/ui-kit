import { Playground, Props } from 'docz'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# Tabs

<Playground>
  <IntlProvider
    locale='en'
    messages={getMessages['en']}>
  </IntlProvider>
</Playground>
