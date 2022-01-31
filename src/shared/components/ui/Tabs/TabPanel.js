import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import TabContext from './TabContext'
import { styles } from '@helpers/css'
import scss from './Tabs.scss'

//TODO TabPanel css, test
/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * TabPanel - stateless presentational component
 * @param {object} props - props
 * @param {string} props.name - name
 * @param {string|array} props.className - list of class names, default: `tab__panel`
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
const TabPanel = ({ name, className, children, ...restProps }) => {
  const tabContext = useContext(TabContext)
  const classNames = `${cssClass(className)} Tab--active`

  return (
    tabContext.activeTab === name && (
      <div className={classNames} {...restProps}>
        {children}
      </div>
    )
  )
}

TabPanel.displayName = 'TabPanel'

TabPanel.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired
}

TabPanel.defaultProps = {
  className: 'tab__panel'
}

export default TabPanel
