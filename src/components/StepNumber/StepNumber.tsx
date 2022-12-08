import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './StepNumber.module.scss'

interface StepNumberProps {
  className?: string | string[]
  step: number
  variant?: 'current' | 'completed' | 'next'
  size?: 'small' | 'medium'
  absolute?: boolean
}

export const StepNumber: FC<StepNumberProps> = ({
  className = '',
  step,
  variant = 'current',
  size = 'small',
  absolute = false
}) => {
  const elementClasses = useStyles(
    {
      [styles.step__number]: true,
      [styles['step__number--absolute']]: absolute === true,
      [styles[`step__number--${variant}`]]: variant,
      [styles[`step__number--${size}`]]: size
    },
    className
  )

  return (
    <span className={elementClasses} data-testid='stepNumber'>
      {step}
    </span>
  )
}

StepNumber.displayName = 'StepNumber'
