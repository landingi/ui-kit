import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Layout.scss'

const cssClass = styles(scss)

/**
 * Layout - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: layout
 * @param {object} props.children - children
 * @param {string} props.width - width
 * @return {object} An object of children element
 */
const layout = ({ className, children, width }) => (
  <div
    className={cssClass(
      className,
      `layout-width--${width}`
    )}
  >
    {children}
  </div>
)

/**
 * Display name
 * @type {string}
 */
layout.displayName = 'Layout'

/**
 * The properties.
 * @type {Object}
 */
layout.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname, default `layout`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   *Width default: `full`
   */
  width: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
layout.defaultProps = {
  className: 'layout',
  width: 'full'
}

export default layout
