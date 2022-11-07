import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Tabs.module.scss'

/**
 * TabList - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `tab__list`
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
const TabList = ({ className, children, ...restProps }) => {
  const tabListStyles = useStyles({ [styles.tab__list]: true }, className)

  return (
    <div className={tabListStyles} {...restProps}>
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
  className: ''
}

export default TabList
