import { useStyles } from '@helpers/hooks/useStyles'
import React, { FC, ReactNode } from 'react'

import styles from './List.module.scss'

interface ListProps {
  children: ReactNode
  listStyle?: 'ordered-check' | 'ordered-decimal' | 'ordered-disc'
  className?: string | string[]
  variant?: 'inline'
}

export const List: FC<ListProps> = ({
  children,
  variant = '',
  className = '',
  listStyle = ''
}) => {
  const elementClasses = useStyles(
    {
      [styles.list]: true,
      [styles['list--inline']]: variant === 'inline',
      [styles[`list--${listStyle}`]]: listStyle
    },
    className
  )

  return (
    <ul className={elementClasses}>
      {React.Children.toArray(children).filter(item => item)}
    </ul>
  )
}

List.displayName = 'List'
