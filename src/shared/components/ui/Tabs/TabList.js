import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Tabs.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * tabList - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `tab__list`
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
const tabList = ({ className, children, ...restProps }) => {
  return (
    <div
className={cssClass(className)}
{...restProps}>
      {children}
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
tabList.displayName = 'TabList'

/**
 * The properties.
 * @type {Object}
 */
tabList.propTypes = {
  /**
   * Classname, default `tabs`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Children elements
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
tabList.defaultProps = {
  className: 'tab__list'
}

export default tabList
