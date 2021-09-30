import { Playground, Props } from 'docz'
import OverflowTooltip from '@components/ui/OverflowTooltip'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# OverflowTooltip

<Props of={OverflowTooltip} />

<Playground>
  <IntlProvider
    locale='en'
    messages={getMessages['en']}>
      <OverflowTooltip content='foobar' placement='right' length={3}>
        <FontAwesomeIcon icon='info-circle' />
      </OverflowTooltip>
  </IntlProvider>
</Playground>
