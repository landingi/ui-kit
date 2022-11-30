import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Backdrop.module.scss'

interface BackdropProps {
  className?: string | string[]
  onClick?: () => void
  zIndex?: '4' | '6' | '8'
}

export const Backdrop: FC<BackdropProps> = ({
  className = '',
  onClick = () => {},
  zIndex = null
}) => {
  const backdropStyles = useStyles(
    {
      [styles.backdrop]: true,
      [styles['backdrop__index-4']]: String(zIndex) === '4',
      [styles['backdrop__index-6']]: String(zIndex) === '6',
      [styles['backdrop__index-8']]: String(zIndex) === '8'
    },
    className
  )

  return (
    <div className={backdropStyles} onClick={onClick} data-testid='backdrop' />
  )
}

Backdrop.displayName = 'Backdrop'
