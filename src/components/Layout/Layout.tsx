import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'

interface LayoutProps {
  className?: string | string[]
  children: ReactNode
  width?: 'large' | 'big' | 'full'
  'data-testid'?: string
}

export const Layout: FC<LayoutProps> = ({
  className = '',
  children,
  width = 'full',
  'data-testid': dataTestId = 'layout-component'
}) => {
  const layoutStyles = useStyles(
    {
      [styles.layout]: true,
      [styles[`layout-width--${width}`]]: width
    },
    className
  )

  return (
    <div className={layoutStyles} data-testid={dataTestId}>
      {children}
    </div>
  )
}

Layout.displayName = 'Layout'
