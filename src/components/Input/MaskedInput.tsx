import { Label } from '@components/Label'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'
import MaskedInputComponent, { Mask } from 'react-text-mask'

import styles from './Input.module.scss'

export interface MaskedInputProps {
  className?: string | string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  type?: React.HTMLInputTypeAttribute
  name?: string
  disabled?: boolean
  readonly?: boolean
  value?: string | number
  autoFocus?: boolean
  maxLength?: number
  mask: Mask | ((value: string) => Mask)
  guide?: boolean
  focused?: string | boolean
  i18n?: {
    placeholder?: string
    label?: string
  }
  alwaysShowLabel?: boolean
  required?: boolean
}

export const MaskedInput: FC<MaskedInputProps> = ({
  className,
  onChange,
  onKeyDown,
  onBlur,
  type = 'text',
  name,
  disabled,
  readonly,
  value = '',
  autoFocus,
  maxLength,
  mask,
  guide = false,
  focused,
  i18n: { placeholder, label } = { placeholder: '', label: '' },
  alwaysShowLabel,
  required = true
}) => {
  const elementClasses = useStyles(
    {
      [styles.input__wrapper]: true,
      [styles['input__wrapper--focused']]: focused || focused === 'true',
      [styles['input__wrapper--show-label']]: alwaysShowLabel
    },
    className
  )

  return (
    <div className={elementClasses}>
      <MaskedInputComponent
        mask={mask}
        className={styles.input}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={placeholder || label}
        name={name}
        id={name}
        defaultValue={value}
        readOnly={disabled ? readonly : undefined}
        disabled={!disabled ? undefined : disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        required={required}
        guide={guide}
        data-testid='masked-input'
      />

      <span className={styles.highlight} />

      <span className={styles.bar} />

      {label && (
        <Label id={name} className={styles.input__label}>
          {label}
        </Label>
      )}
    </div>
  )
}

MaskedInput.displayName = 'MaskedInput'
