import { useStyles } from '@helpers/hooks/useStyles'
import { Children, cloneElement, FC, ReactElement } from 'react'

import styles from './Card.module.scss'

interface CardProps {
  className?: string | string[]
  children: ReactElement
  variant: 'alert' | 'warning' | 'success'
}

export const Card: FC<CardProps> = ({ className = '', children, variant }) => {
  const elementClasses = useStyles(
    {
      [styles.card]: true,
      [styles[`card--${variant}`]]: variant
    },
    className
  )

  const containerClasses = useStyles({
    [styles.container]: true
  })

  return (
    <div data-testid='card' className={elementClasses}>
      <div className={containerClasses}>
        {Children.map(children, child => cloneElement(child))}
      </div>
    </div>
  )
}

Card.displayName = 'Card'
