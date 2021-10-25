import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Backdrop.scss'

const cssClass = styles(scss)

/**
 * Backdrop - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: backdrop
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Backdrop = ({ className, onClick }) => (
  <div className={cssClass(className)} onClick={onClick} />
)

Backdrop.displayName = 'Backdrop'

Backdrop.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Gets called when the user clicks on backdrop
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func
}

Backdrop.defaultProps = {
  className: 'backdrop',
  onClick: () => null
}

export default Backdrop
