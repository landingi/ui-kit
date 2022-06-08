import React from 'react'
import PropTypes from 'prop-types'
import Html from '@components/global/Html'
import styles from './Toggle.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Toggle - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: ''
 * @param {string} props.name - name
 * @param {bool} props.checked - checked
 * @param {string} props.type
 * @param {func} props.onChange - onChange
 * @param {func} props.onBlur - onBlur
 * @param {string} props.id - id
 * @param {string} props.label - label, default: ''
 * @param {bool} props.disabled - disabled, default: false
 * @return {object} An object of children element
 */
const Toggle = ({
  name,
  checked,
  onChange,
  onBlur,
  id,
  label,
  className,
  disabled,
  ['data-testid']: dataTestId
}) => {
  const wrapperStyles = useStyles(
    { [styles['toggle-container']]: true },
    className
  )

  const labelStyles = useStyles({
    [styles.toggle]: true,
    [styles['toggle--checked']]: checked,
    [styles['toggle--checked-disabled']]: checked && disabled,
    [styles['toggle--disabled']]: !checked && disabled
  })

  return (
    <div className={wrapperStyles}>
      <label className={labelStyles}>
        <input
          name={name}
          className={styles.toggle__checkbox}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          type='checkbox'
          id={id}
          disabled={disabled}
          {...(dataTestId ? { ['data-testid']: dataTestId } : {})}
        />

        <span className={styles.toggle__button} />
      </label>

      {label && (
        <label htmlFor={id}>
          <Html value={label} />
        </label>
      )}
    </div>
  )
}

Toggle.displayName = 'Toggle'

Toggle.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf]),
  disabled: PropTypes.bool,
  ['data-testid']: PropTypes.string
}

Toggle.defaultProps = {
  className: '',
  label: '',
  onBlur: () => null,
  disabled: false,
  ['data-testid']: null
}

export default Toggle
