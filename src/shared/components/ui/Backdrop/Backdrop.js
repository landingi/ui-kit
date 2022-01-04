import PropTypes from 'prop-types'
import React from 'react'
import styles from './Backdrop.module.scss'

/**
 * Backdrop - stateless presentational component
 * @param {object} props - props
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Backdrop = ({ onClick }) => (
  <div className={styles.backdrop} onClick={onClick} />
)

Backdrop.displayName = 'Backdrop'

Backdrop.propTypes = {
  onClick: PropTypes.func
}

Backdrop.defaultProps = {
  onClick: () => null
}

export default Backdrop
