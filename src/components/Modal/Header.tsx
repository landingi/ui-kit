import { Heading } from '@components/Heading'
import { FC } from 'react'

export interface ModalHeaderProps {
  title: string
  align?: 'left' | 'center' | 'right'
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  title,
  align = 'left'
}) => (
  <Heading level={2} align={align}>
    {title}
  </Heading>
)

ModalHeader.displayName = 'ModalHeader'
