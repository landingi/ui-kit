import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactEventHandler } from 'react'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  onChange?: ReactEventHandler<HTMLInputElement>
  className?: string | string[]
  checked: boolean
  disabled?: boolean
  formikKey?: string
  'data-testid'?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  onChange,
  className = '',
  checked,
  disabled = false,
  formikKey,
  'data-testid': dataTestId = 'checkbox'
}) => {
  const checkboxStyles = useStyles(
    { [styles.input__checkbox]: true },
    className
  )

  return (
    <label className={checkboxStyles}>
      <input
        data-testid={dataTestId}
        onChange={onChange}
        name={formikKey}
        checked={checked}
        disabled={disabled}
        type='checkbox'
      />
      <div />
    </label>
  )
}

Checkbox.displayName = 'Checkbox'
