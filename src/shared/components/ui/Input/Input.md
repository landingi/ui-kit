import { Playground, Props } from 'docz'
import Input from '@components/ui/Input'

# Input

<Props of={Input} />

<Playground>
  <Input
    i18n={{placeholder:'Test placeholder',label:'Test label'}}
    type="text"
  />
  <Input
    i18n={{placeholder:'Test placeholder',label:'Test label'}}
    type="text"
    alwaysShowLabel
  />
</Playground>
