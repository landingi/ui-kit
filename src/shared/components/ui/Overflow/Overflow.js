import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Overflow.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Overflow - stateless presentational component
   * @param {object} props - props
   * @param {object} props.children - childrens
   * @param {string|array} props.className - list of class names, default: overflow
   * @return {object} An object of children element
   */
  overflow = ({ children, className }) => (
    <div className={cssClass(className)}>{children}</div>
  )

/**
 * Display name
 * @type {string}
 */
overflow.displayName = 'Overflow'

/**
 * The properties.
 * @type {Object}
 */
overflow.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * Classname, default `overflow`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

/**
 * The default properties.
 * @type {Object}
 */
overflow.defaultProps = {
  children: null,
  className: 'overflow'
}

export default overflow
