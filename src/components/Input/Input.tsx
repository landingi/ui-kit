import { Icon } from '@components/Icon'
import { Label } from '@components/Label'
import { Paragraph } from '@components/Paragraph'
import { Tooltip } from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  KeyboardEventHandler,
  ReactNode,
  Ref
} from 'react'

import styles from './Input.module.scss'

export interface InputProps {
  className?: string | string[]
  onChange?: ChangeEventHandler<HTMLInputElement>
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  type?: 'text' | 'number' | 'password'
  name?: string
  disabled?: boolean
  readonly?: boolean
  i18n?: {
    label?: string
    placeholder?: string
    description?: string | ReactNode
  }
  value?: string | number
  autoFocus?: boolean
  maxLength?: number
  required?: boolean
  focused?: boolean
  tooltip?: string
  min?: number
  max?: number
  background?: 'white' | 'transparent'
  hideArrows?: boolean
  alwaysShowLabel?: boolean
  defaultValue?: string
  variant?: 'table'
  form?: boolean
  dir?: 'rtl' | 'ltr' | 'auto'
  ['data-testid']?: string
}

export const Input = forwardRef(
  (
    {
      className,
      onChange,
      onKeyDown,
      onBlur,
      onFocus,
      type = 'text',
      name,
      disabled = false,
      readonly = false,
      i18n,
      value,
      autoFocus = false,
      maxLength = 524288,
      required = true,
      focused = false,
      tooltip,
      min,
      max,
      background = 'white',
      hideArrows = false,
      alwaysShowLabel = false,
      defaultValue,
      variant,
      form = false,
      dir,
      'data-testid': dataTestId = 'input-component'
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const wrapperStyles = useStyles(
      {
        [styles.input__wrapper]: true,
        [styles['input__wrapper--focused']]: focused,
        [styles['input__wrapper--show-label']]: alwaysShowLabel,
        [styles['input__wrapper--table']]: variant === 'table'
      },
      className
    )

    const tooltopStyles = useStyles({
      [styles.input__tooltip]: true,
      [styles['input__tooltip--form']]: form
    })

    const inputStyles = useStyles({
      [styles.input]: true,
      [styles['input--transparent']]: background === 'transparent',
      [styles['input--hidden-arrows']]: hideArrows,
      [styles['input--table']]: variant === 'table'
    })

    const renderDefault = defaultValue && !value

    return (
      <div className={wrapperStyles} data-testid='input-wrapper'>
        <input
          data-testid={dataTestId}
          ref={ref}
          className={inputStyles}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          type={type}
          placeholder={i18n?.placeholder}
          name={name}
          id={name}
          value={value}
          readOnly={disabled ? readonly : undefined}
          disabled={!disabled ? undefined : disabled}
          autoFocus={autoFocus}
          maxLength={maxLength}
          required={required}
          {...(dir ? { dir } : {})}
          {...(type === 'number' ? { min, max } : {})}
          {...(renderDefault ? { defaultValue } : {})}
        />
        <span className={styles.highlight} />

        <span className={styles.bar} />

        {i18n?.label && (
          <Label id={name} className={styles.input__label}>
            {i18n.label}
          </Label>
        )}

        {i18n?.description && !form && (
          <Paragraph size={12} color='accent-5' line={24}>
            {i18n.description}
          </Paragraph>
        )}

        {tooltip && (
          <Tooltip
            className={tooltopStyles}
            placement='bottom'
            content={tooltip}
            data-testid='input-tooltip'
          >
            <Icon color='color-3' icon='icon-exclamation-circle' />
          </Tooltip>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
