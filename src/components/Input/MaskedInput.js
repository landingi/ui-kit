import React from 'react'
import PropTypes from 'prop-types'
import Label from '@components/Label'
import MaskedInputComponent from 'react-text-mask'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Input.module.scss'

/**
 * Masked Input - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: input
 * @param {function} props.onChange - click handler
 * @param {function} props.onKeyDown - key down handler
 * @param {function} props.onBlur - blur handler
 * @param {string} props.type - type
 * @param {string|object} props.placeholder - placeholder
 * @param {string} props.name - name
 * @param {boolean} props.disabled - disabled
 * @param {boolean} props.readonly - readonly
 * @param {string} props.label - label
 * @param {bool} props.autoFocus - autoFocus
 * @param {string} props.mask - mask applied to input
 * @param {number} props.maxLength - max length of input
 * @param {object} props.field - formik field
 * @param {bool}  props.guide - if it is true underscores will be displayed to represent mask format
 * @param {string} props.focused - focused, keep label by default on top
 * @param {string|number} props.value - value
 * @param {object} props.i18n - translations
 * @param {bool} props.alwaysShowLabel - when true label is shown even when input is empty
 * @return {object} An object of children element
 */
const MaskedInput = ({
  keyProp,
  className,
  onChange,
  onKeyDown,
  onBlur,
  type,
  name,
  disabled,
  readonly,
  value,
  autoFocus,
  maxLength,
  mask,
  guide,
  focused,
  i18n: { placeholder, label },
  alwaysShowLabel
}) => {
  const elementClasses = useStyles(
    {
      [styles.input__wrapper]: true,
      [styles['input__wrapper--focused']]: focused === 'true',
      [styles['input__wrapper--show-label']]: alwaysShowLabel
    },
    className
  )

  return (
    <div className={elementClasses}>
      <MaskedInputComponent
        key={keyProp}
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
        required
        guide={guide}
        focused={focused}
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

MaskedInput.displayName = 'Masked'

MaskedInput.propTypes = {
  keyProp: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)])
  ),
  guide: PropTypes.bool,
  focused: PropTypes.string,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string,
    label: PropTypes.string
  }),
  alwaysShowLabel: PropTypes.bool
}

MaskedInput.defaultProps = {
  keyProp: '',
  className: '',
  onChange: () => null,
  onKeyDown: () => null,
  onBlur: () => null,
  type: 'text',
  placeholder: '',
  name: null,
  disabled: false,
  readonly: false,
  label: null,
  value: null,
  autoFocus: false,
  maxLength: 524288,
  mask: [],
  guide: false,
  focused: 'false',
  i18n: {
    placeholder: '',
    label: ''
  },
  alwaysShowLabel: false
}

export default MaskedInput
