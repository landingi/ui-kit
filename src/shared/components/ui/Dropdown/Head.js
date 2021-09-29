import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Dropdown.scss'

const cssClass = styles(scss),
  /**
   * Dropdown Head element - stateless presentational component
   * @param {object} props - props
   * @param {object} props.children - children
   * @param {string|array} props.className - list of class names, default: `dropdown__head`
   * @return {object} An object of children element
   */
  dropdownHead = ({ children, className }) => (
    <div className={cssClass(className)}>{children}</div>
  )

/**
 * Display name
 * @type {string}
 */
dropdownHead.displayName = 'Dropdown.Head'

/**
 * The properties.
 * @type {Object}
 */
dropdownHead.propTypes = {
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname, default `dropdown__head`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
dropdownHead.defaultProps = {
  className: 'dropdown__head'
}

export default dropdownHead
