import { Playground, Props } from 'docz'
import ProgressBar from '@components/ui/ProgressBar'
import { IntlProvider } from 'react-intl'
import { getMessages } from '@helpers/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

# ProgressBar

<Props of={ProgressBar} />

## Normal

<Playground>
  <ProgressBar 
    variant='success' 
    quantity={90} 
    limit={100} />
  <ProgressBar 
    variant='warning' 
    quantity={100} 
    limit={100} />
  <ProgressBar 
    variant='alert' 
    quantity={110} 
    limit={100} />
</Playground>

## Exceeded info

<Playground>
 <IntlProvider
    locale='en'
    messages={getMessages['en']}>
      <ProgressBar
        variant='success'
        quantity={90}
        limit={100}
        limitExceededInfo
        limitText='statistics.unique-users'/>
  </IntlProvider>
</Playground>

## Limit

<Playground>
  <ProgressBar 
    variant='success'
    quantity={90} 
    limit={100} 
    showColorNumber />
</Playground>

## Limit dropdown

<Playground>
  <ProgressBar 
    variant='success'
    quantity={90} 
    limit={100} 
    barSize='small'
    showDropdownResult
    limitText='statistics.unique-users' />
</Playground>
