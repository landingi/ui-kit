import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './StepNumber.scss'

const cssClass = styles(scss)

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
function StepNumber({ className, step, variant, size, absolute }) {
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

/**
 * Display name
 * @type {string}
 */
StepNumber.displayName = 'Step Number'

/**
 * The properties.
 * @type {Object}
 */
StepNumber.propTypes = {
  /**
   * Absolute
   */
  absolute: PropTypes.bool,

  /**
   * Classname, default `panel`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * Size
   */
  size: PropTypes.string,

  /**
   * Step
   */
  step: PropTypes.number.isRequired,

  /**
   * Step
   */
  variant: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
StepNumber.defaultProps = {
  absolute: false,
  className: 'step__number',
  size: 'small',
  variant: 'current'
}

export default StepNumber
