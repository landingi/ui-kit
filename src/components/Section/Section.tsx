import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Section.module.scss'

export interface SectionProps {
  className?: string | string[]
  children: ReactNode
  space?: string
  width?: string
  background?: string
}

export const Section: FC<SectionProps> = ({
  className = '',
  children,
  space = 'medium',
  width = 'full',
  background = 'default'
}) => {
  const elementClasses = useStyles(
    {
      [styles.section]: true,
      [styles[`section-space--${space}`]]: space,
      [styles[`layout-width--${width}`]]: width,
      [styles[`section-bg--${background}`]]: background
    },
    className
  )

  return <div className={elementClasses}>{children}</div>
}

Section.displayName = 'Section'
