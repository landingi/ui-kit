import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Error.scss'

const cssClass = styles(scss)

// TODO Form Error checkbox css, mdx, global
/**
 * Form input error - stateless presentational component
 * @param {object} props - props
 * @param {string} props.error - error message
 * @param {string|array} props.className
 * @return {object} An object of children element
 */
const Error = ({ error, className }) =>
  error ? (
    <span className={cssClass(className)}>{error}</span>
  ) : (
    <span className={cssClass(className)} />
  )

Error.displayName = 'Error'

Error.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

Error.defaultProps = {
  className: 'input__error',
  error: ''
}

export default Error
