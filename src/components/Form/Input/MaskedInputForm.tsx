import Error from '@components/Form/Error'
import styles from '@components/Input/Input.module.scss'
import { MaskedInput } from '@components/Input/MaskedInput'
import { getDeepValue } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'
import { Mask } from 'react-text-mask'

export interface MaskedInputFormProps {
  className?: string | string[]
  field: {
    name: string
    value: string | number
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onBlur: React.FocusEventHandler<HTMLInputElement>
  }
  form?: {
    errors: {
      [key: string]: string
    }
    touched: {
      [key: string]: boolean
    }
  }
  type?: React.HTMLInputTypeAttribute
  disabled?: boolean
  maxLength?: number
  mask: Mask | ((value: string) => Mask)
  guide?: boolean
  focused?: string | boolean
  i18n?: {
    placeholder?: string
    label?: string
  }
  alwaysShowLabel?: boolean
}

export const MaskedInputForm: FC<MaskedInputFormProps> = ({
  className,
  field,
  form = { errors: {}, touched: {} },
  type,
  disabled,
  maxLength,
  mask,
  guide,
  focused,
  i18n,
  alwaysShowLabel
}) => {
  const { name, value, onChange, onBlur } = field
  const { errors, touched } = form

  const error = getDeepValue(errors, name)
  const isTouched = getDeepValue(touched, name)

  const hasErrorToShow = error && isTouched

  const wrapperStyles = useStyles({
    [styles['form-field']]: true,
    [styles['form--has-error']]: hasErrorToShow
  })

  return (
    <div className={wrapperStyles} data-testid='form-masked-input-wrapper'>
      <MaskedInput
        className={className}
        mask={mask}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        i18n={i18n}
        disabled={disabled}
        maxLength={maxLength}
        guide={guide}
        focused={focused}
        alwaysShowLabel={alwaysShowLabel}
      />

      {touched[name] && <Error error={errors[name]} />}
    </div>
  )
}

MaskedInputForm.displayName = 'MaskedInputForm'
