import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Tabs.scss'

const cssClass = styles(scss)

//TODO TabList css, test
/**
 * TabList - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `tab__list`
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
const TabList = ({ className, children, ...restProps }) => {
  return (
    <div className={cssClass(className)} {...restProps}>
      {children}
    </div>
  )
}

TabList.displayName = 'TabList'

TabList.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired
}

TabList.defaultProps = {
  className: 'tab__list'
}

export default TabList
