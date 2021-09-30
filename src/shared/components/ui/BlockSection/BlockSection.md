import { Playground, Props } from 'docz'
import BlockSection from '@components/ui/BlockSection'
import Spacer from '@components/ui/Spacer'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { getMessages } from '@helpers/i18n'

# BlockSection

<Props of={BlockSection} />

<Playground>
  <IntlProvider
    locale='en'
    messages={getMessages['en']}>
    <BlockSection
      title='empty.list.message.domains.section1.title'
      message='empty.list.message.domains.section1.message'
      button='empty.list.message.domains.section.button'
      url='https://images.assets-landingi.com/images/empty-pages/Fonts/fonts_empty_section1.png' />
  </IntlProvider>
</Playground>

## Example

<Playground>
  <IntlProvider
    locale='en'
    messages={getMessages['en']}>
    <BlockSection
        title='empty.list.message.domains.section1.title'
        message='empty.list.message.domains.section1.message'
        button='empty.list.message.domains.section.button'
        url='https://images.assets-landingi.com/images/empty-pages/Domains/domain_empty_section1.png'
        reverse />
      <Spacer space='big' />
      <BlockSection
        title='empty.list.message.domains.section2.title'
        message='empty.list.message.domains.section2.message'
        button='empty.list.message.domains.section.button'
        url='https://images.assets-landingi.com/images/empty-pages/Domains/domain_empty_section2.png' />
      <Spacer space='big' />
      <BlockSection
        title='empty.list.message.domains.section3.title'
        message='empty.list.message.domains.section3.message'
        button='empty.list.message.domains.section.button'
        url='https://images.assets-landingi.com/images/empty-pages/Domains/domain_empty_section3.png'
        reverse />
      <Spacer space='big' />
  </IntlProvider>
</Playground>
