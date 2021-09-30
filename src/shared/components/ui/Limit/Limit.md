import { Playground, Props } from 'docz'
import Limit from '@components/ui/Limit'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'

# Limit

<Props of={Limit} />

<Playground>
    <IntlProvider
    locale='en'
    messages={getMessages['en']}>
        <Limit
            icon='users'
            limit={200}
            quantity={100}
            name='statistics.unique-users' />
    </IntlProvider>
</Playground>
