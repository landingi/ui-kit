import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactEventHandler } from 'react'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  onChange?: ReactEventHandler<HTMLInputElement>
  className?: string | string[]
  checked: boolean
  disabled?: boolean
  formikKey?: string
  tableDeselect?: boolean
  'data-testid'?: string
  backgroundColor?: 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5'
}

export const Checkbox: FC<CheckboxProps> = ({
  onChange,
  className = '',
  checked,
  disabled = false,
  formikKey,
  tableDeselect = false,
  'data-testid': dataTestId = 'checkbox',
  backgroundColor
}) => {
  const checkboxStyles = useStyles(
    {
      [styles.input__checkbox]: true,
      [styles['input__checkbox--table-deselect']]: tableDeselect,
      [styles[`input__checkbox--special-background-color--${backgroundColor}`]]:
        backgroundColor
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
