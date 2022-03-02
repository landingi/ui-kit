import React from 'react'
import PropTypes from 'prop-types'
import Error from '@components/ui/Form/Error'
import InputComponent from '@components/ui/Input'
import { getDeepValue } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from '@components/ui/Input/Input.module.scss'

// TODO Form Input css, mdx
/**
 * Input - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string} props.placeholder - placeholder
 * @param {string} props.type - type of element `text, number etc`
 * @param {number} props.maxLength - max length of input
 * @param {bool} props.autoFocus - autoFocus
 * @param {string|object} props.tooltip - tooltip
 * @param {string} props.focused - focused, keep label by default on top
 * @param {bool} props.disabled - disabled
 * @param {bool} props.required - required
 * @param {string} props.background - color of background `white, transparent', default: white
 * @param {bool} props.alwaysShowLabel - always show label on top
 * @param {object} props.i18n - object of translation
 * @param {string} props.variant - input variant, default ''
 * @return {object} An object of children element
 */
const Input = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  i18n,
  type,
  disabled,
  maxLength,
  autoFocus,
  required,
  tooltip,
  focused,
  background,
  alwaysShowLabel,
  variant
}) => {
  const error = getDeepValue(errors, name)
  const isTouched = getDeepValue(touched, name)

  const wrapperStyles = useStyles({
    [styles['form-field']]: true,
    [styles['form--has-error']]: error && isTouched
  })

  return (
    <div className={wrapperStyles}>
      <InputComponent
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
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
      />

      {isTouched && <Error error={error} />}
    </div>
  )
}

Input.displayName = 'Input'

Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object)
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),
  background: PropTypes.oneOf(['white', 'transparent']),
  focused: PropTypes.string,
  alwaysShowLabel: PropTypes.bool,
  i18n: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string
  }),
  variant: PropTypes.string
}

Input.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  disabled: false,
  maxLength: 524288,
  autoFocus: false,
  required: true,
  tooltip: '',
  background: 'white',
  focused: 'false',
  alwaysShowLabel: false,
  i18n: {
    label: null,
    placeholder: null
  },
  variant: ''
}

export default Input
