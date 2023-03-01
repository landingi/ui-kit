import Image from '@components/Image'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Avatar.module.scss'

const renderVariant = (variant: string, src: string, name: string) =>
  variant === 'image' ? <Image src={src} /> : <p>{name}</p>

export interface AvatarProps {
  className?: string | string[]
  size?: 'tiny' | 'medium'
  variant?: 'image' | 'blank'
  src?: string
  name?: string
}

export const Avatar: FC<AvatarProps> = ({
  className = '',
  size = 'medium',
  variant = 'blank',
  src = '',
  name = ''
}) => {
  const avatarStyles = useStyles(
    {
      [styles.avatar]: true,
      [styles[`avatar--${size}`]]: size,
      [styles[`avatar--${variant}`]]: variant
    },
    className
  )

  return (
    <span className={avatarStyles} data-testid='avatar'>
      {renderVariant(variant, src, name)}
    </span>
  )
}

Avatar.displayName = 'Avatar'
