import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './ColorLine.module.scss'

interface ColorLineProps {
  className?: string | string[]
  variant: 'alert' | 'warning' | 'success' | 'info'
  alignment?: 'vertical' | 'horizontal'
}

export const ColorLine: FC<ColorLineProps> = ({
  className = '',
  variant,
  alignment = 'vertical'
}) => {
  const elementClasses = useStyles(
    {
      [styles['color-line']]: true,
      [styles[`color-line--${variant}`]]: variant,
      [styles[`color-line--${alignment}`]]: alignment
    },
    className
  )

  return <span data-testid='colorline' className={elementClasses} />
}

ColorLine.displayName = 'ColorLine'
