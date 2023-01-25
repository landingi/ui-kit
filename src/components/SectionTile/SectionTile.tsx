import { BoxOutline } from '@components/BoxOutline'
import { FC, MouseEvent, ReactNode } from 'react'

import styles from './SectionTile.module.scss'

export interface SectionTileProps {
  children: ReactNode
  thumbnailUrl?: string
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  onDoubleClick?: (event: MouseEvent<HTMLDivElement>) => void
  isActive?: boolean
}

export const SectionTile: FC<SectionTileProps> = ({
  children,
  thumbnailUrl = '',
  onClick = () => {},
  onDoubleClick = () => {},
  isActive = false
}) => (
  <BoxOutline
    className={styles.section__tile}
    isSelected={isActive}
    padding='none'
  >
    <div
      style={{
        background: `url(${thumbnailUrl}) center top no-repeat`
      }}
      className={styles['section__pointer-area']}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    />
    {children}
  </BoxOutline>
)

SectionTile.displayName = 'SectionTile'
