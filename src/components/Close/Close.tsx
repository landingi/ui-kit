import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEventHandler } from 'react'

import styles from './Close.module.scss'

interface CloseProps {
  className?: string | string[]
  onClick?: MouseEventHandler<HTMLSpanElement>
  iconName?: string
  size?: 10 | 12 | 14 | 32
  iconColor?: string
}

export const Close: FC<CloseProps> = ({
  className = '',
  onClick = () => null,
  iconName = 'icon-remove',
  size,
  iconColor
}) => {
  const elementStyles = useStyles(
    {
      [styles.close]: true
    },
    className
  )

  return (
    <span className={elementStyles} onClick={onClick}>
      <Button
        variant='icon-transparent-hover'
        data-testid='close-component-button'
      >
        <Icon icon={iconName} size={size} color={iconColor} />
      </Button>
    </span>
  )
}

Close.displayName = 'Close'
