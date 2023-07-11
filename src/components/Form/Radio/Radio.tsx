import { useStyles } from '@helpers/hooks/useStyles'
import React, { FC } from 'react'

import styles from './Radio.module.scss'

export interface RadioProps {
  field: {
    name: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onBlur: React.FocusEventHandler<HTMLInputElement>
  }
  id: string
  label?: string
  className?: string | string[]
  type?: string
  disabled?: boolean
}

export const Radio: FC<RadioProps> = ({
  field: { name, value, onChange, onBlur },
  id,
  label = '',
  className = '',
  type = 'radio',
  disabled = false
}) => {
  const radioStyles = useStyles(
    {
      [styles.radio]: true
    },
    className
  )

  const labelStyles = useStyles(
    {
      [styles['label--disabled']]: disabled
    },
    className
  )

  return (
    <label className={radioStyles}>
      {label && (
        <label className={labelStyles} htmlFor={id}>
          {label}
        </label>
      )}

      <input
        name={name}
        id={id}
        type={type}
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={radioStyles}
        disabled={disabled}
      />

      <div className={styles.radio__overlay} />
    </label>
  )
}

Radio.displayName = 'Radio'
