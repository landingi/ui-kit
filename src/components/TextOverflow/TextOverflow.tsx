import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './TextOverflow.module.scss'

interface TextOverflowProps {
  className?: string | string[]
  children?: ReactNode
}

export const TextOverflow: FC<TextOverflowProps> = ({
  className = '',
  children = null
}) => {
  const textOverflowStyles = useStyles(
    {
      [styles.overflow]: true
    },
    className
  )

  return (
    <div className={textOverflowStyles} data-testid='overflow'>
      {children}
    </div>
  )
}

TextOverflow.displayName = 'TextOverflow'
