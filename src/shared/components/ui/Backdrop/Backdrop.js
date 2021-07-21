import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Backdrop.scss'

const cssClass = styles(scss)

/**
 * Backdrop - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: backdrop
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */

const backdrop = ({ className, onClick }) => (
  <div
    className={cssClass(className)}
    onClick={onClick} />
)

/**
 * Display name
 * @type {string}
 */
backdrop.displayName = 'Backdrop'

/**
 * The properties.
 * @type {Object}
 */
backdrop.propTypes = {
  /**
   * Classname, default `backdrop`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Gets called when the user clicks on backdrop
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
backdrop.defaultProps = {
  className: 'backdrop',
  onClick: () => null
}

export default backdrop
