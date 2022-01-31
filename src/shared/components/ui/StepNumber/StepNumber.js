import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './StepNumber.scss'

const cssClass = styles(scss)

//TODO StepNumber css, test
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
  const elementClasses = cssClass({
    'step__number--absolute': absolute === true,
    'step__number--completed': variant === 'completed',
    'step__number--current': variant === 'current',
    'step__number--medium': size === 'medium',
    'step__number--next': variant === 'next',
    'step__number--small': size === 'small'
  })

  return <span className={cssClass(className, elementClasses)}>{step}</span>
}

StepNumber.displayName = 'StepNumber'

StepNumber.propTypes = {
  absolute: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.string,
  step: PropTypes.number.isRequired,
  variant: PropTypes.string
}

StepNumber.defaultProps = {
  className: 'step__number',
  size: 'small',
  variant: 'current',
  absolute: false
}

export default StepNumber
