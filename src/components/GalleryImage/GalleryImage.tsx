import { FC, ReactEventHandler } from 'react'

import styles from './GalleryImage.module.scss'

interface GalleryImageProps {
  src: string
  onClick?: ReactEventHandler<HTMLDivElement>
  onDoubleClick?: ReactEventHandler<HTMLDivElement>
}

export const GalleryImage: FC<GalleryImageProps> = ({
  src,
  onClick = () => null,
  onDoubleClick = () => null
}) => (
  <div
    className={styles.background}
    onClick={onClick}
    onDoubleClick={onDoubleClick}
    data-testid='gallery-image'
  >
    <div className={styles.image} style={{ backgroundImage: `url(${src})` }} />
  </div>
)

GalleryImage.displayName = 'GalleryImage'
