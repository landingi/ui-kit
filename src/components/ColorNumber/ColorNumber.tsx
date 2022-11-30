import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './ColorNumber.module.scss'

interface ColorNumberProps {
  className?: string | string[]
  children: ReactNode
  variant:
    | 'alert'
    | 'warning'
    | 'success'
    | 'default'
    | 'progress'
    | 'info'
    | 'brand'
    | 'white'
  size?: 10 | 12 | 16 | 18 | 32 | 44 | 62
}

const ColorNumber: FC<ColorNumberProps> = ({
  className = '',
  children,
  variant,
  size = 18
}) => {
  const elementClasses = useStyles(
    {
      [styles['color-number']]: true,
      [styles[`color-number__color--${variant}`]]: variant,
      [styles[`color-number__size--${size}`]]: size
    },
    className
  )

  return (
    <span className={elementClasses} data-testid='color-number'>
      {children}
    </span>
  )
}

ColorNumber.displayName = 'ColorNumber'

export default ColorNumber
