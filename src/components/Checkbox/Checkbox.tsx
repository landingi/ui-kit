import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactEventHandler } from 'react'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  onChange?: ReactEventHandler<HTMLInputElement>
  className?: string | string[]
  checked: boolean
  disabled?: boolean
  formikKey?: string
  table?: boolean
  tableDeselect?: boolean
  'data-testid'?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  onChange,
  className = '',
  checked,
  disabled = false,
  formikKey,
  table = false,
  tableDeselect = false,
  'data-testid': dataTestId = 'checkbox'
}) => {
  const checkboxStyles = useStyles(
    {
      [styles.input__checkbox]: true,
      [styles['input__checkbox--table']]: table,
      [styles['input__checkbox--table-deselect']]: tableDeselect
    },
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
