import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'
import { Row } from 'simple-flexbox'

import styles from './Dot.module.scss'

interface DotProps {
  variant?:
    | 'brand'
    | 'alert'
    | 'warning'
    | 'success'
    | 'info'
    | 'pending'
    | 'accent-1'
    | 'accent-2'
    | 'accent-3'
    | 'accent-4'
    | 'accent-5'
    | 'accent-6'
    | 'accent-7'
  label?: ReactNode | string
  className?: string | string[]
}

export const Dot: FC<DotProps> = ({
  variant = 'brand',
  label,
  className = ''
}) => {
  const wrapperStyles = useStyles({}, className)

  const dotStyles = useStyles({
    [styles.dot]: true,
    [styles[`dot--${variant}`]]: true
  })

  return (
    <Row alignItems='center' className={wrapperStyles}>
      <div className={dotStyles} />

      <Spreader spread='tiny' />

      {label ? <span>{label}</span> : null}
    </Row>
  )
}

Dot.displayName = 'Dot'
