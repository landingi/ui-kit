import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Heading.module.scss'

interface HeadingProps {
  className?: string | string[]
  children: ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6 | 'large'
  align?: 'left' | 'center' | 'right'
  margin?: 'none'
  bold?: boolean
  color?: 'white' | 'brand' | 'gray'
}

export const Heading: FC<HeadingProps> = ({
  className = '',
  children,
  level,
  align = 'left',
  margin = null,
  bold = false,
  color = null
}) => {
  const elementClasses = useStyles(
    {
      [styles.heading]: true,
      [styles[`h${level}`]]: level,
      [styles['heading--bold']]: bold,
      [styles[`heading--${align}`]]: align,
      [styles['heading--no-margin']]: margin === 'none',
      [styles[`heading__color--${color}`]]: color
    },
    className
  )

  return (
    <span className={elementClasses} data-testid='heading'>
      {children}
    </span>
  )
}

Heading.displayName = 'Heading'
