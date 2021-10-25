import { Playground, Props } from 'docz'
import InfoSection from '@components/ui/InfoSection'
import { getMessages } from '@helpers/i18n'

# InfoSection

<Props of={InfoSection} />

<Playground>
  <InfoSection
    title='empty.list.message.fonts.title'
    url='https://images.assets-landingi.com/images/empty-pages/Fonts/fonts_empty.png'
    list={[
    'empty.list.message.fonts.item1',
    'empty.list.message.fonts.item2',
    'empty.list.message.fonts.item3'
  ]}
  button='empty.list.message.fonts.button' />
</Playground>
