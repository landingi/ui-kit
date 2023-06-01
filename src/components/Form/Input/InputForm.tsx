import Error from '@components/Form/Error'
import { Input as InputComponent } from '@components/Input'
import styles from '@components/Input/Input.module.scss'
import { Paragraph } from '@components/Paragraph'
import { getDeepValue } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler
} from 'react'

interface InputProps {
  className?: string | string[]
  field: {
    name: string
    value: string | number
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
  }
  form?: {
    errors: {
      [key: string]: string
    }
    touched: {
      [key: string]: boolean
    }
  }
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  type?: 'text' | 'number' | 'password'
  disabled?: boolean
  i18n?: {
    label?: string
    placeholder?: string
    description?: string
  }
  autoFocus?: boolean
  maxLength?: number
  required?: boolean
  focused?: boolean
  tooltip?: string
  background?: 'white' | 'transparent'
  hideArrows?: boolean
  alwaysShowLabel?: boolean
  variant?: 'table'
  min?: number
  max?: number
  ['data-testid']?: string
}
export const InputForm: FC<InputProps> = ({
  className,
  field: { name, value, onChange, onBlur },
  form: { errors, touched } = {},
  i18n,
  type = 'text',
  disabled = false,
  maxLength = 524288,
  autoFocus = false,
  required = true,
  tooltip,
  focused = false,
  background = 'white',
  alwaysShowLabel = false,
  variant,
  onKeyDown,
  onFocus,
  'data-testid': dataTestId = 'input-component',
  hideArrows = false,
  min,
  max
}) => {
  const error = getDeepValue(errors, name)
  const isTouched = getDeepValue(touched, name)
  const hasErrorToShow = error && isTouched

  const wrapperStyles = useStyles(
    {
      [styles['form-field']]: true,
      [styles['form--has-error']]: hasErrorToShow
    },
    className
  )

  return (
    <div className={wrapperStyles}>
      <InputComponent
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        i18n={i18n}
        disabled={disabled}
        maxLength={maxLength}
        autoFocus={autoFocus}
        required={required}
        tooltip={tooltip}
        focused={focused}
        background={background}
        alwaysShowLabel={alwaysShowLabel}
        variant={variant}
        data-testid={dataTestId}
        hideArrows={hideArrows}
        min={min}
        max={max}
        form
      />

      {hasErrorToShow ? (
        <Error error={error} />
      ) : i18n?.description ? (
        <Paragraph size={12} color='color-8' padding='none'>
          {i18n.description}
        </Paragraph>
      ) : null}
    </div>
  )
}

InputForm.displayName = 'InputForm'
