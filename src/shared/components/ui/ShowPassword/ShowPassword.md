import { Playground, Props } from 'docz'
import ShowPassword from '@components/ui/ShowPassword'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# ShowPassword

<Props of={ShowPassword} />

<Playground>
    <IntlProvider
        locale='en'
        messages={getMessages['en']}>
           <ShowPassword
            setHidden={false}
            hasLabel />
    </IntlProvider>
</Playground>

