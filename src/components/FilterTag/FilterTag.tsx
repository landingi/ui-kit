import Button from '@components/Button'
import { Icon } from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './FilterTag.module.scss'

export interface FilterTagProps {
  children: ReactNode
  className?: string | string[]
  variant: 'primary' | 'secondary'
  onClick?: () => void
  handleClose?: () => void
  isDisabled?: boolean
}

export const FilterTag: FC<FilterTagProps> = ({
  children,
  className = '',
  variant = 'primary',
  onClick,
  handleClose,
  isDisabled = false
}) => {
  const elementStyles = useStyles(
    {
      [styles.filterTag]: true,
      [styles[`filterTag--${variant}`]]: variant,
      [styles['filterTag--disabled']]: isDisabled
    },
    className
  )
  return (
    <span className={elementStyles}>
      <Button
        variant='secondary-outlined'
        onClick={onClick}
        className={styles['filterTag-button']}
        isDisabled={isDisabled}
        data-testid='FilterTag'
      >
        <span>{children}</span>

        <span onClick={handleClose} className={styles['close-button']}>
          <Icon icon='icon-remove' />
        </span>
      </Button>
    </span>
  )
}

FilterTag.displayName = 'FilterTag'
