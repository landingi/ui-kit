import Error from '@components/Form/Error'
import { Label } from '@components/Label'
import { Paragraph } from '@components/Paragraph'
import { Spacer } from '@components/Spacer'
import { getDeepValue } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment } from 'react'

import styles from './Textarea.module.scss'

export interface TextareaProps {
  className?: string | string[]
  name: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  variant?: 'default' | 'codearea'
  size?: 'tiny' | 'small' | 'medium'
  i18n?: {
    placeholder?: string
    label?: string
    description?: string
  }
  hasResize?: boolean
  maxHeight?: number
  disabled?: boolean
  errors?: Record<string, string>
  touched?: Record<string, boolean>
  maxLength?: number
  dir?: 'rtl' | 'ltr' | 'auto'
}

export const Textarea: FC<TextareaProps> = ({
  className,
  name,
  id,
  value,
  onChange,
  onBlur,
  variant = 'default',
  size,
  i18n,
  hasResize,
  maxHeight,
  disabled,
  errors = {},
  touched = {},
  maxLength = 524288,
  dir
}) => {
  const error = getDeepValue(errors, name)
  const isTouched = getDeepValue(touched, name)
  const hasErrorToShow = error && isTouched

  const labelStyles = useStyles({
    [styles['textarea__label--disabled']]: disabled,
    [styles['textarea__label--error']]: hasErrorToShow
  })

  const textAreaStyles = useStyles(
    {
      [styles.textarea]: true,
      [styles[`textarea--${variant}`]]: variant,
      [styles[`textarea--${size}`]]: size,
      [styles['textarea--resize']]: hasResize,
      [styles['textarea--error']]: hasErrorToShow
    },
    className
  )

  return (
    <Fragment>
      {i18n?.label && (
        <Fragment>
          <Label id={id} padding='none' className={labelStyles}>
            {i18n.label}
          </Label>

          <Spacer space='tiny' />
        </Fragment>
      )}

      <textarea
        className={textAreaStyles}
        id={id}
        name={name}
        placeholder={i18n?.placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        style={{ maxHeight }}
        disabled={disabled}
        maxLength={maxLength}
        {...(dir ? { dir } : {})}
      />

      {hasErrorToShow ? (
        <Error error={error} />
      ) : i18n?.description ? (
        <Paragraph size={12} color='color-8' padding='none'>
          {i18n?.description}
        </Paragraph>
      ) : null}
    </Fragment>
  )
}

Textarea.displayName = 'Textarea'
