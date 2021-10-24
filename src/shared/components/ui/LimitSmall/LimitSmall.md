import { Playground, Props } from 'docz'
import LimitSmall from '@components/ui/LimitSmall'
import { getMessages } from '@helpers/i18n'

# LimitSmall

<Props of={LimitSmall} />

<Playground>
    <LimitSmall
        limit={100}
        quantity={10}
        limitText='word.active.subaccounts' />
</Playground>
