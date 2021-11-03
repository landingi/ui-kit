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
    <CustomLink variant='active' label='size 10' href='#' size={10} />
    <CustomLink variant='active' label='size 12' href='#' size={12} />
    <CustomLink variant='active' label='size 14' href='#' size={14} />
    <CustomLink variant='active' label='size 16' href='#' size={16} />
</Playground>

## Underlined

<Playground>
    <CustomLink variant='active' label='underlined' href='#' underlined />
</Playground>
