import PropTypes from 'prop-types'
import React from 'react'
import styles from './Backdrop.module.scss'

/**
 * Backdrop - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Backdrop = ({ className, onClick }) => (
  <div className={className} onClick={onClick} />
)

Backdrop.displayName = 'Backdrop'

Backdrop.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func
}

Backdrop.defaultProps = {
  onClick: () => null,
  className: styles.backdrop
}

export default Backdrop
