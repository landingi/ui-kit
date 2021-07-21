import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Error.scss'

const cssClass = styles(scss)

/**
 * Form input error - stateless presentational component
 * @param {object} props - props
 * @param {string} props.error - error message
 * @param {string|array} props.className - list of class names, default: input__error
 * @return {object} An object of children element
 */
const inputError = ({ error, className }) =>
  error ? (
    <span className={cssClass(className)}>
      {error}
    </span>
  ) : (
    <span className={cssClass(className)} />
  )

/**
 * Display name
 * @type {string}
 */
inputError.displayName = 'Input Error'

/**
 * The properties.
 * @type {Object}
 */
inputError.propTypes = {
  /**
   * Classname, default `input__error`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Error message
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

/**
 * The default properties.
 * @type {Object}
 */
inputError.defaultProps = {
  className: 'input__error',
  error: ''
}

export default inputError
