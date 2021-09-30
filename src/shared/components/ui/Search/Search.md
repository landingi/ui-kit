import { Playground, Props } from 'docz'
import Search from '@components/ui/Search'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# Search

<Props of={Search} />

<Playground>
    <IntlProvider
        locale='en'
        messages={getMessages['en']}>
          <Search
            autoFocus
            space="large" />
    </IntlProvider>
</Playground>

