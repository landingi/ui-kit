import { Icon } from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Spinner.module.scss'

export interface SpinnerProps {
  className?: string | string[]
}
export const Spinner: FC<SpinnerProps> = ({ className = '' }) => {
  const elementClasses = useStyles(
    {
      [styles.spinner]: true
    },
    className
  )

  return (
    <div className={elementClasses} data-testid='spinner'>
      <Icon icon='icon-spinner' spin />
    </div>
  )
}

Spinner.displayName = 'Spinner'
