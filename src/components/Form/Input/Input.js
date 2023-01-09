import Error from '@components/Form/Error'
import InputComponent from '@components/Input'
import styles from '@components/Input/Input.module.scss'
import { Paragraph } from '@components/Paragraph'
import { getDeepValue } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

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
 * @param {function} props.onKeyDown - key down handler
 * @param {function} props.onFocus - focus handler
 * @param {boolean} props.hideArrows - Hide arrows inc/dec value from type number input
 * @return {object} An object of children element
 */
const Input = ({
  className,
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
  variant,
  onKeyDown,
  onFocus,
  'data-testid': dataTestId,
  hideArrows
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
        id={id}
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

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func
  }),
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object)
  }),
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
    placeholder: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  }),
  variant: PropTypes.string,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  'data-testid': PropTypes.string,
  hideArrows: PropTypes.bool
}

Input.defaultProps = {
  className: '',
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
    placeholder: null,
    description: null
  },
  variant: '',
  onKeyDown: () => null,
  onFocus: () => null,
  form: { errors: {}, touched: {} },
  field: {},
  'data-testid': 'input-component',
  hideArrows: false
}

export default Input
