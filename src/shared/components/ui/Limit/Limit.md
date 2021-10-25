import { Playground, Props } from 'docz'
import Limit from '@components/ui/Limit'
import { getMessages } from '@helpers/i18n'

# Limit

<Props of={Limit} />

<Playground>
    <Limit
        icon='users'
        limit={200}
        quantity={100}
        name='statistics.unique-users' />
</Playground>
