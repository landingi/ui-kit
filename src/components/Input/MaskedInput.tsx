import { Label } from '@components/Label'
import { useStyles } from '@helpers/hooks/useStyles'
import MaskedInputComponent from 'react-text-mask'

import styles from './Input.module.scss'

export const MaskedInput = ({
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
