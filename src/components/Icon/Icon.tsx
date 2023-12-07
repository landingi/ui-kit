import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import css from './editor-icons.module.scss'
import styles from './Icon.module.scss'

interface IconProps {
  icon: string
  color?: string
  className?: string | string[]
  spin?: boolean
  size?: 10 | 12 | 14 | 16 | 20 | 32
  autoSize?: boolean
  'data-testid'?: string
}

export const Icon: FC<IconProps> = ({
  icon,
  color = 'default',
  className = '',
  spin = false,
  size = 14,
  autoSize = false,
  'data-testid': dataTestId
}) => {
  const elementStyles = useStyles(
    {
      [css['editor-icon']]: true,
      [css[`editor-icon--${size}`]]: !autoSize && size,
      [css[`${icon}`]]: true,
      [styles[`icon--${color}`]]: color,
      [styles['icon--spin']]: spin
    },
    className
  )

  return <i className={elementStyles} data-testid={dataTestId} />
}

Icon.displayName = 'Icon'

export default Icon
