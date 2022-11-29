import Icon from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Spinner.module.scss'

interface SpinnerProps {
  className?: string | string[]
}
const Spinner: FC<SpinnerProps> = ({ className = '' }) => {
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

export default Spinner
