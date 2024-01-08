import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Spacer.module.scss'

export interface SpacerProps {
  className?: string | string[]
  space?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'regular'
    | 'large'
    | 'big'
    | 'huge'
}

export const Spacer: FC<SpacerProps> = ({
  className = '',
  space = 'medium'
}) => {
  const spacerClasses = useStyles(
    {
      [styles.spacer]: true,
      [styles[`spacer--${space}`]]: space
    },
    className
  )

  return <div data-testid='spacer' className={spacerClasses} />
}

Spacer.displayName = 'Spacer'
