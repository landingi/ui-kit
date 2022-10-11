import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Label from '@components/Label'
import Spacer from '@components/Spacer'
import Error from '@components/Form/Error'
import styles from './Textarea.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Textarea - stateless presentational component
 * @param {string | array} className - list of custom css class from out of component
 * @param {string} name - name
 * @param {string} id - id
 * @param {string} value - value
 * @param {func} onChange - on change callback
 * @param {string} variant - variant
 * @param {string} size - size
 * @param {object} i18n - props with translated string
 * @param {bool} hasResize - has resize
 * @param {number} maxHeight - max height
 * @param {bool} props.disabled - disabled
 * @param {object} props.errors - react-formik errors properties
 * @param {object} props.touched - react-formik touched properties
 * @return {object} An object of children element
 */
const Textarea = ({
  className,
  name,
  id,
  value,
  onChange,
  onBlur,
  variant,
  size,
  i18n,
  hasResize,
  maxHeight,
  disabled,
  errors,
  touched
}) => {
  const error = errors[name]
  const isTouched = touched[name]
  const hasErrorToShow = error && isTouched

  const labelStyles = useStyles({
    [styles['textarea__label--error']]: hasErrorToShow
  })

  const textAreaStyles = useStyles(
    {
      [styles['textarea']]: true,
      [styles[`textarea__${variant}`]]: variant,
      [styles[`textarea__${size}`]]: size,
      [styles['textarea__resize']]: hasResize,
      [styles['textarea__error']]: hasErrorToShow
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
        placeholder={i18n.placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        style={{ maxHeight: maxHeight }}
        disabled={disabled}
      />

      {hasErrorToShow && <Error error={error} />}
    </Fragment>
  )
}

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string,
    label: PropTypes.string
  }).isRequired,
  variant: PropTypes.oneOf(['default', 'codearea']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  hasResize: PropTypes.bool,
  maxHeight: PropTypes.number,
  disabled: PropTypes.bool,
  errors: PropTypes.instanceOf(Object),
  touched: PropTypes.instanceOf(Object)
}

Textarea.defaultProps = {
  className: '',
  size: 'medium',
  onBlur: () => null,
  i18n: {
    label: null,
    placeholder: null
  },
  variant: 'default',
  hasResize: false,
  maxHeight: null,
  disabled: false,
  errors: {},
  touched: {}
}

export default Textarea
