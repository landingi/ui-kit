import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Overflow.module.scss'

interface OverflowProps {
  children: ReactNode
  className?: string | string[]
}

/**
 * Overflow - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - childrens
 * @param {string|array} props.className - list of class names
 * @return {object} An object of children element
 */
export const Overflow: FC<OverflowProps> = ({ children, className = '' }) => {
  const elementClasses = useStyles(
    {
      [styles.overflow]: true
    },
    className
  )

  return <div className={elementClasses}>{children}</div>
}

Overflow.displayName = 'Overflow'
