import React from 'react'
import PropTypes from 'prop-types'
import Label from '@components/ui/Label'
import Tooltip from '@components/ui/Tooltip'
import Paragraph from '@components/ui/Paragraph'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Input.module.scss'
import Icon from '@components/ui/Icon'

//TODO Input css, global,
/**
 * Input - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: input
 * @param {function} props.onChange - click handler
 * @param {function} props.onKeyDown - key down handler
 * @param {function} props.onBlur - blur handler
 * @param {string} props.type - type
 * @param {string} props.name - name
 * @param {boolean} props.disabled - disabled
 * @param {boolean} props.readonly - readonly
 * @param {object} props.i18n - object of translation
 * @param {bool} props.autoFocus - autoFocus
 * @param {string} props.focused - focused, keep label by default on top
 * @param {number} props.maxLength - max length of input
 * @param {string|object} props.tooltip - tooltip
 * @param {string|number} props.value - value
 * @param {number} props.min - min value when type is number
 * @param {number} props.max - max value when type is number
 * @param {bool} props.required - required
 * @param {string} props.background - Color of background `white, transparent', default: white
 * @param {boolean} props.hideArrows - Hide arrows inc/dec value from type number input
 * @param {bool} props.alwaysShowLabel - always show label on top
 * @param {string} props.variant - input variant, default ''
 * @param {bool} props.form - is input form
 * @return {object} An object of children element
 */
const Input = ({
  className,
  onChange,
  onKeyDown,
  onBlur,
  type,
  name,
  disabled,
  readonly,
  i18n,
  value,
  autoFocus,
  maxLength,
  required,
  focused,
  tooltip,
  min,
  max,
  background,
  hideArrows,
  alwaysShowLabel,
  defaultValue,
  variant,
  form
}) => {
  const wrapperStyles = useStyles(
    {
      [styles['input__wrapper']]: true,
      [styles['input__wrapper--focused']]: focused === 'true',
      [styles['input__wrapper--show-label']]: alwaysShowLabel,
      [styles['input__wrapper--table']]: variant === 'table'
    },
    className
  )

  const tooltopStyles = useStyles({
    [styles['input__tooltip']]: true,
    [styles['input__tooltip--form']]: form
  })

  const inputStyles = useStyles({
    [styles['input']]: true,
    [styles['input--transparent']]: background === 'transparent',
    [styles['input--hidden-arrows']]: hideArrows,
    [styles['input--table']]: variant === 'table'
  })

  const renderDefault = defaultValue && !value

  return (
    <div className={wrapperStyles}>
      <input
        data-testid='input-component'
        className={inputStyles}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={i18n.placeholder}
        name={name}
        id={name}
        value={value}
        readOnly={disabled ? readonly : undefined}
        disabled={!disabled ? undefined : disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        required={required}
        {...(type === 'number' ? { min, max } : {})}
        {...(renderDefault ? { defaultValue } : {})}
      />
      <span className={styles['highlight']} />

      <span className={styles['bar']} />

      {i18n?.label && (
        <Label id={name} className={styles['input__label']}>
          {i18n.label}
        </Label>
      )}

      {i18n?.description && !form && (
        <Paragraph size='12' color='color-8'>
          {i18n.description}
        </Paragraph>
      )}

      {tooltip && (
        <Tooltip className={tooltopStyles} placement='bottom' content={tooltip}>
          <Icon color='color-3' icon='icon-exclamation-circle' />
        </Tooltip>
      )}
    </div>
  )
}

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  focused: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),
  background: PropTypes.oneOf(['white', 'transparent']),
  hideArrows: PropTypes.bool,
  i18n: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.function])
  }),
  defaultValue: PropTypes.string,
  alwaysShowLabel: PropTypes.bool,
  variant: PropTypes.string,
  form: PropTypes.bool
}

Input.defaultProps = {
  className: '',
  type: 'text',
  focused: 'false',
  tooltip: '',
  background: 'white',
  maxLength: 524288,
  i18n: {
    label: null,
    placeholder: null,
    description: null
  },
  name: null,
  value: undefined,
  disabled: false,
  readonly: false,
  autoFocus: false,
  required: true,
  hideArrows: false,
  onChange: () => null,
  onKeyDown: () => null,
  onBlur: () => null,
  defaultValue: null,
  alwaysShowLabel: false,
  variant: '',
  form: false
}

export default Input
