import { useStyles } from '@helpers/hooks/useStyles'
import { FC, memo } from 'react'

import styles from './Image.module.scss'

interface ImageProps {
  src: string
  alt?: string
  className?: string | string[]
  size?: number
  height?: number
  auto?: boolean
  small?: boolean
  loadingAttr?: 'lazy' | 'eager'
  draggable?: boolean
}

const Image: FC<ImageProps> = ({
  src,
  alt = '',
  className = '',
  size,
  height,
  auto = false,
  small = false,
  loadingAttr = 'eager',
  draggable = false
}) => {
  const elementStyles: string = useStyles(
    {
      [styles['image--auto']]: auto,
      [styles['image--small']]: small
    },
    className
  )

  return (
    <img
      alt={alt}
      className={elementStyles}
      height={height}
      src={src}
      width={size}
      loading={loadingAttr}
      draggable={draggable}
      data-testid='image'
    />
  )
}

Image.displayName = 'Image'

export default memo(Image)
