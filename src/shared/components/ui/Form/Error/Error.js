import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Error.module.scss'

// TODO Form Error checkbox mdx
/**
 * Form input error - stateless presentational component
 * @param {object} props - props
 * @param {string} props.error - error message
 * @param {string|array} props.className
 * @return {object} An object of children element
 */
const Error = ({ error, className }) => {
  const errorStyles = useStyles({ [styles.error]: true }, className)

  return error ? <span className={errorStyles}>{error}</span> : null
}

Error.displayName = 'Error'

Error.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

Error.defaultProps = {
  className: '',
  error: ''
}

export default Error
