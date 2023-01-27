import Error from '@components/Form/Error'
import { MaskedInput } from '@components/Input/MaskedInput'
import { FC } from 'react'
import { Mask } from 'react-text-mask'

export interface MaskedInputFormProps {
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
  const errorClass = errors[name] && touched[name] ? 'form--has-error' : ''

  return (
    <div
      className={`form-field ${errorClass}`}
      data-testid='form-masked-input-wrapper'
    >
      <MaskedInput
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
