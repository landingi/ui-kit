import { Playground, Props } from 'docz'
import Image from '@components/ui/Image'

# Image

<Props of={Image} />


## Small

<Playground>
  <Image
    alt="Landingi"
    className="image--small"
    src="https://images.assets-landingi.com/REiQ5YQl/logo_sygnet.svg"
  />
</Playground>

## Auto

<Playground>
  <Image
    alt="Landingi"
    className="image--auto"
    src="https://images.assets-landingi.com/REiQ5YQl/logo_sygnet.svg"
  />
</Playground>

## Clickable

<Playground>
  <Image
    alt="Landingi"
    size={100}
    className="image--clickable"
    src="https://images.assets-landingi.com/REiQ5YQl/logo_sygnet.svg"
  />
</Playground>
