import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './StepNumber.module.scss'

/**
 * StepNumber - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: 'step__number'
 * @param {number} props.step - step number
 * @param {string} props.variant - step number variant, default 'current'
 * @param {string} props.size - step number size, default 'small'
 * @param {bool} props.absolute - position absolute, default 'false'
 * @return {object} An object of children element
 */
const StepNumber = ({ className, step, variant, size, absolute }) => {
  const elementClasses = useStyles(
    {
      [styles.step__number]: true,
      [styles['step__number--absolute']]: absolute === true,
      [styles[`step__number--${variant}`]]: variant,
      [styles[`step__number--${size}`]]: size
    },
    className
  )

  return (
    <span className={elementClasses} data-testid='stepNumber'>
      {step}
    </span>
  )
}

StepNumber.displayName = 'StepNumber'

StepNumber.propTypes = {
  absolute: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOf(['small', 'medium']),
  step: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['current', 'completed', 'next'])
}

StepNumber.defaultProps = {
  className: '',
  size: 'small',
  variant: 'current',
  absolute: false
}

export default StepNumber
