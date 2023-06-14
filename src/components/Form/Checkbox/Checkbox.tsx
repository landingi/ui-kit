import Error from '@components/Form/Error'
import { getDeepValue } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { ChangeEventHandler, FC, FocusEventHandler, ReactNode } from 'react'

import styles from './Checkbox.module.scss'

export interface FormikCheckboxProps {
  className?: string | string[]
  field: {
    name: string
    value: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
  }
  form: {
    errors: {
      [key: string]: string
    }
    touched: {
      [key: string]: boolean
    }
  }
  id: string
  label?: ReactNode
  disabled?: boolean
}

export const Checkbox: FC<FormikCheckboxProps> = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label = '',
  className = '',
  disabled = false
}) => {
  const error = getDeepValue(errors, name)

  const isTouched = getDeepValue(touched, name)

  const containerStyles = useStyles(
    {
      [styles['checkbox-container']]: true
    },
    className
  )

  const inputStyles = useStyles({
    [styles.checkbox__input]: true
  })

  const labelStyles = useStyles({
    [styles.checkbox__label]: true,
    [styles['checkbox__label--disabled']]: disabled
  })

  return (
    <div className={containerStyles}>
      <label className={inputStyles}>
        <input
          name={name}
          type='checkbox'
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          disabled={disabled}
        />
        <div />
      </label>
      {label && (
        <label htmlFor={id} className={labelStyles}>
          {label}
          {isTouched && <Error error={error} />}
        </label>
      )}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'
