import { Playground, Props } from 'docz'
import SocialConnectBadge from '@components/ui/SocialConnectBadge'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# SocialConnectBadge

<Props of={SocialConnectBadge} />

<Playground>
    <IntlProvider
        locale='en'
        messages={getMessages['en']}>
        <SocialConnectBadge variant='connect' social='google' />
        <SocialConnectBadge variant='disconnect' social='google' />
        <SocialConnectBadge variant='connect' social='facebook' />
        <SocialConnectBadge variant='disconnect' social='facebook' />
    </IntlProvider>
</Playground>
