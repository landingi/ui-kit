import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Checkbox.module.scss'

/**
 * Checkbox - stateless presentational component
 * @param {object} props - props
 * @param {func} props.onChange - onChange handler
 * @param {func} props.className - custom styles
 * @param {func} props.disabled - disable checkbox
 * @param {func} props.formikKey - formik key
 * @return {object} An object of children element
 */
const Checkbox = ({
  onChange,
  className,
  checked,
  disabled,
  formikKey,
  ['data-testid']: dataTestId
}) => {
  const checkboxStyles = useStyles(
    { [styles.input__checkbox]: true },
    className
  )

  return (
    <label className={checkboxStyles}>
      <input
        data-testid={dataTestId}
        onChange={onChange}
        name={formikKey}
        checked={checked}
        disabled={disabled}
        type='checkbox'
      />
      <div />
    </label>
  )
}

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  formikKey: PropTypes.string,
  ['data-testid']: PropTypes.string
}

Checkbox.defaultProps = {
  className: '',
  disabled: false,
  formikKey: null,
  ['data-testid']: undefined
}

export default Checkbox
