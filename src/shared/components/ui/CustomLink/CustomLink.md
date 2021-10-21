import { Playground, Props } from 'docz'
import CustomLink from '@components/ui/CustomLink'

# CustomLink

<Props of={CustomLink} />

## Variant

<Playground>
    <CustomLink variant='active' label='active' href='#' />
    <CustomLink variant='inactive' label='inactive' href='#' />
    <CustomLink variant='dark' label='dark' href='#' />
</Playground>

## Size

<Playground>
    <CustomLink variant='active' label='active' href='#'/>
    <CustomLink variant='active' label='active' href='#' size={16} />
</Playground>
