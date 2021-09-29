import { Playground, Props } from 'docz'
import LimitSmall from '@components/ui/LimitSmall'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'

# LimitSmall

<Props of={LimitSmall} />

<Playground>
    <IntlProvider
        locale='en'
        messages={getMessages['en']}>
        <LimitSmall
            limit={100}
            quantity={10}
            limitText='word.active.subaccounts' />
    </IntlProvider>
</Playground>
