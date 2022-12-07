import { Icon } from '@components/Icon'
import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Check.module.scss'

interface CheckProps {
  className?: string | string[]
  children: ReactNode
  positive?: boolean
  crossedOutOnPositive?: boolean
}

export const Check: FC<CheckProps> = ({
  className = '',
  children,
  positive = false,
  crossedOutOnPositive = false
}) => {
  const wrapperStyles = useStyles(
    {
      [styles.check]: true,
      [styles['check--positive']]: positive,
      [styles['check--crossed-out']]: positive && crossedOutOnPositive
    },
    className
  )

  return (
    <span className={wrapperStyles} data-testid='check'>
      <Icon icon={positive ? 'icon-ok' : 'icon-remove'} />

      <Spreader spread='tiny' />
      <div className={styles['check__line-through']}>{children}</div>
    </span>
  )
}

Check.displayName = 'Check'
