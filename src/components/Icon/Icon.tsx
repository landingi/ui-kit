import { FC } from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Icon.module.scss'
import css from './editor-icons.module.scss'

interface IconProps {
  icon: string
  color?: string
  className?: string | string[]
  spin?: boolean
  size?: 10 | 12 | 14
  autoSize?: boolean
  'data-testid'?: string
}

const Icon: FC<IconProps> = ({
  icon,
  color,
  className,
  spin,
  size,
  autoSize,
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

Icon.defaultProps = {
  className: '',
  color: 'default',
  spin: false,
  size: 14,
  autoSize: false,
  'data-testid': undefined
}

export default Icon
